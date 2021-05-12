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
      <input type="text" class="form-control" placeholder="Buscar...">
    </div>

    <div class="buttons col-12">
      <button type="button" class="btn btn-outline-primary me-4"><i class="fas fa-plus"></i> Nuevo Paciente</button>
      <button type="button" class="btn btn-outline-primary"><i class="fas fa-file-download"></i> Descargar CSV</button>
    </div>
    <!--BUTTONS TABLE-->
    <div class="viewing col-12">
      <button class="bg-transparent border-0"><i class="fas fa-bars"></i></button>
      <button class="bg-transparent border-0"><i class="fas fa-table"></i></button>
      <button class="bg-transparent border-0">5</button>
      <button class="bg-transparent border-0">10</button>
      <button class="bg-transparent border-0">15</button>
    </div>
    <!--TABLE-->
    <div class="table col-12 mt-3">
      <table class="table">
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
          <tr v-for="patient in patients" :key="patient.id">
            <td>
              <img src="https://www.eltiempo.com/files/article_content/files/crop/uploads/2020/09/03/5f51bcadc5cf8.r_1599194976129.0-13-429-335.jpeg"> 
              {{ patient.datos_paciente.nombre }} {{ patient.datos_paciente.apellidos }}
              <!--<p><i class="far fa-calendar-alt"></i> 10/01/2019</p>-->
            </td>
            <td>{{ patient.ficha_dental.clinica }}</td>
            <td>{{ patient.ficha_dental.objetivo_tratamiento }}</td>
            <td>{{ patient.ficha_dental.estado }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination">
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

  </div>
</template>



<script>
import axios from 'axios';
export default {
  data() {
    return {
      patients: null
    }
  },
  mounted() {
    this.getPatients();
  },
  methods: {
    getPatients() {
      axios
          .get('api.json')
              .then( response => {
                console.log(response)
                this.patients = response.data
              })
              .catch( e => console.log(e) )
    }
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
.viewing button:hover {
  transform: scale(2);
  transition: transform 1s ease-in-out 0s;
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
}
.table tbody p {
  color: #acacac;
  position: fixed;
  margin-left: 55px;
  margin-top: -30px;
}
/*PAGINATION*/
.pagination {
  justify-content: center;
}
.pagination a {
  color: #acacac;
}
.pagination li:hover {
  color: #0d6efd;
}
</style>