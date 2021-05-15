<template>
  <div class="row">

    <!--HEADBOARD-->
    <div class="headboard col-12 p-3">
      <h5>Listado de Pacientes</h5>
    </div>

    <!--HEADER-->
    <div class="header col-6">
      <div class="icon-card">
        <p><i class="far fa-id-card"></i></p>
      </div>
      <div class="title">
        <h3>Listado de Pacientes</h3>
        <p>Visualización de pacientes</p>
      </div>
    </div>

    <div class="search col-6">
      <input type="text" class="form-control" placeholder="Buscar..." v-model="search" @keyup="searchPatients">
    </div>

    <div class="buttons col-12">
      <button v-b-modal.modal-center type="button" class="btn btn-outline-primary me-4"><i class="fas fa-plus"></i> Nuevo Paciente</button>
      <NewPatient></NewPatient>
      <button type="button" class="btn btn-outline-primary"><i class="fas fa-file-download"></i> Descargar CSV</button>
    </div>

    <!--BUTTONS VIEWING-->
    <div class="viewing col-12">
      <button class="bg-transparent border-0" v-on:click="viewTable" v-bind:class="viewMode === true ? 'gray' : ''"><i class="fas fa-bars"></i></button>
      <button class="bg-transparent border-0" v-on:click="viewCard" v-bind:class="viewMode === true ? '' : 'gray'"><i class="fas fa-table"></i></button>
      <button class="bg-transparent border-0">5</button>
      <button class="bg-transparent border-0">10</button>
      <button class="bg-transparent border-0">15</button>
    </div>
    
    <!--TABLE-->
    <div class="table col-12 mt-3" v-if="viewMode">
      <table class="table table-hover">
        <thead>
          <tr>
            <td>Nombre y apellidos</td>
            <td class="text_align">Clinica</td>
            <td class="text_align">Objetivo Tratamiento</td>
            <td class="text_align">Estado</td>
            <td class="text_align">Acciones</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="patient in pagination(filterPatients)" v-bind:key="patient.id">
            <td>
              <img src="https://www.eltiempo.com/files/article_content/files/crop/uploads/2020/09/03/5f51bcadc5cf8.r_1599194976129.0-13-429-335.jpeg"> 
              {{ patient.datos_paciente.nombre }} {{ patient.datos_paciente.apellidos }}
              <p><i class="far fa-calendar-alt"></i> {{ patient.datos_paciente.fecha_nacimiento }}</p>
            </td>
            <td>{{ patient.ficha_dental.clinica }}</td>
            <td>{{ patient.ficha_dental.objetivo_tratamiento }}</td>
            <td>{{ patient.ficha_dental.estado }}</td>
            <td>
              <select class="form-select">
                <option selected>Acciones</option>
                <option value="1">Editar</option>
                <option value="2">Finalizar</option>
                <option value="3">Borrar</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--CARDS-->
    <div class="card m-3" style="width: 21rem; height: 24rem;" v-for="patient in pagination(filterPatients)" v-bind:key="patient.id" v-else>
      <img src="https://www.eltiempo.com/files/article_content/files/crop/uploads/2020/09/03/5f51bcadc5cf8.r_1599194976129.0-13-429-335.jpeg" class="image-card card-img-top mx-auto">
      <div class="card-body text-center">
        <h5 class="card-title">{{ patient.datos_paciente.nombre }} {{ patient.datos_paciente.apellidos }}</h5>
        <p class="card-text">{{ patient.datos_paciente.fecha_nacimiento }}</p>
        <p class="card-text"><strong>Clinica:</strong> {{ patient.ficha_dental.clinica }}</p>
        <p class="card-text"><strong>Tratamiento:</strong> {{ patient.ficha_dental.objetivo_tratamiento }}</p>
        <p class="card-text"><strong>Estado:</strong> {{ patient.ficha_dental.estado }}</p>
      </div>
      <div class="card-footer mx-auto">
        <a class="btn btn-success me-3">Editar</a>
        <a class="btn btn-warning me-3">Finalizar</a>
        <a class="btn btn-danger me-3">Borrar</a>
      </div>
    </div>

    <!--PAGINATION-->
    <b-pagination align="center" :total-rows="this.filterPatients.length " v-model="actualPage" :per-page="itemsPerPage" ></b-pagination>

  </div>
</template>



<script>
import axios from 'axios';

import NewPatient from '@/components/NewPatient';
import ViewPatient from '@/components/ViewPatient';

export default {
  components: {
    NewPatient,
    ViewPatient
  },

  data() {
    return {
      patients: [],
      search: '',
      filterPatients: [],
      viewMode: true,
      actualPage: 1,
      itemsPerPage: 5
    }
  },

  created() {
    this.getPatients();
  },
  
  methods: {
    // GET LIST PATIENTS
    getPatients() {
      axios
        .get('api.json')
        .then( res => {
          Object.values(res.data).forEach(element => {
            this.patients.push(element);
            this.filterPatients.push(element);
          })
          console.log(this.patients)
        })
        .catch( err => {
          console.log(err)
        });
    },
    // SEARCH PATIENTS
    searchPatients() {
      if(!this.search) {
        this.filterPatients = this.patients;
      }

      const filter_patients = this.patients.filter((patient) => {
        const name = patient.datos_paciente.nombre + ' ' + patient.datos_paciente.apellidos
          return name.toLowerCase().includes(this.search.toLowerCase().trim());
      });

      this.filterPatients = filter_patients;
    },
    // VIEW MODE TABLE
    viewTable() {
      this.viewMode = true;
    },
    // VIEW MODE CARD
    viewCard() {
      this.viewMode = false;
    },
    // PAGING BAR
    pagination(items) {
      const indexHome = (this.actualPage - 1) * this.itemsPerPage;
      const finalIndex = indexHome + this.itemsPerPage > items.length ? items.length : indexHome  + this.itemsPerPage;
      
      return items.slice(indexHome , finalIndex );
    }
    // 
  }
}
</script>



<style scoped>
/*HEADBOARD*/
.headboard {
  background: #ededed;
}
/*HEADER*/
.header {
  display: flex;
  align-items: center;
}
.icon-card {
  font-size: 30px;
  margin-top: 30px;
}
.title {
  margin-top: 25px;
  margin-left: 20px;
}
.title p {
  color: #acacac;
}
/*SEARCH*/
.search {
  margin-top: 33px;
}
.search input {
  height: 55px;
  background: #ededed;
  border: none;
}
/*VIEWING*/
.viewing {
  margin-top: 20px;
}
.viewing button {
  font-size: 30px;
  margin-right: 10px;
}
/*TABLE*/
img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.text_align {
  text-align: center;
}
.table tbody tr {
  border: 2px solid #ededed;
  line-height: 45px;
  cursor: pointer;
}
.table tbody p {
  color: #acacac;
  margin-left: 55px;
  margin-top: -30px;
}
/*CARD*/
.image-card {
  margin-top: 10px;
  height: 100px;
  width: 100px;
  border-radius: 33%;
}
.gray {
  color: #868585;
}
</style>