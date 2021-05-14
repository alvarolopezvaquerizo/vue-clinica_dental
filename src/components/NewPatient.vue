<template>

    <b-modal id="modal-center" size="xl" centered title="Nuevo Paciente" hide-footer>
        <b-card>
            <b-card-text style="height: 39vh; width: 114vh;">

                <b-card-text>

                    <div class="row">
                        <div class="col-4">
                            <label class="form-label">Nombre</label>
                            <input type="text" class="form-control" v-model="nombre">
                        </div>
                        <div class="col-8">
                            <label class="form-label">Apellidos</label>
                            <input type="text" class="form-control" v-model="apellidos">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <label class="form-label">Fecha de Nacimiento</label>
                            <input type="date" class="form-control" v-model="fecha_de_nacimiento">
                        </div>
                        <div class="col-6">
                            <label class="form-label">Sexo</label>
                            <select class="form-select" aria-label="Default select example" v-model="sexo">
                                <option selected>Escoja una opción</option>
                                <option value="1">Masculino</option>
                                <option value="2">Femenino</option>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <label class="form-label">Clinica</label>
                            <input type="text" class="form-control" v-model="clinica">
                        </div>
                        <div class="col-6">
                            <label class="form-label">Objetivo del tratamiento</label>
                            <select class="form-select" aria-label="Default select example" v-model="tratamiento">
                                <option selected>Escoja una opción</option>
                                <option value="1">Estética</option>
                                <option value="2">Oclusión</option>
                                <option value="1">Estética y Oclusión</option>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4">
                            <label class="form-label">Recorte Alineadores</label>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="check" id="check-1" v-model="check1">
                                <label class="form-check-label" for="check-1">
                                    Recortar dejando 1-3 mm de encía
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="check" id="check-2" v-model="check2">
                                <label class="form-check-label" for="check-2">
                                    Recortar a nivel de los cuellos
                                </label>
                            </div>
                        </div>
                        <div class="col-4">
                            <label class="form-label">¿Alineadores pasivos?</label>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="check" id="check-1" v-model="check3">
                                <label class="form-check-label" for="check-1">
                                    SI
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="check" id="check-2" v-model="check4">
                                <label class="form-check-label" for="check-2">
                                    NO
                                </label>
                            </div>
                        </div>
                        <div class="col-4">
                            <label class="form-label">¿SecretRetrainer?</label>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="check" id="check-1" v-model="check5">
                                <label class="form-check-label" for="check-1">
                                    SI
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="check" id="check-2" v-model="check6">
                                <label class="form-check-label" for="check-2">
                                    NO
                                </label>
                            </div>
                        </div>

                    </div>

                </b-card-text>

                <hr>

                <b-card-text class="float-end">
                    <a class="btn btn-success me-3" @click="$bvModal.hide('modal-center'), saveForm()">Guardar</a>
                    <a class="btn btn-secondary me-3" @click="$bvModal.hide('modal-center')">Cancelar</a>
                    <a class="btn btn-warning" @click="resetForm">Limpiar</a>
                </b-card-text>
            </b-card-text>
        </b-card>
    </b-modal>

</template>



<script>
export default {
    data() {
        return {
            nombre: '',
            apellidos: '',
            fecha_de_nacimiento: '',
            sexo: '',
            clinica: '',
            tratamiento: '',
            check1: '',
            check2: '',
            check3: '',
            check4: '',
            check5: '',
            check6: ''
        }
    },
    methods: {
        // SAVE FORM
        saveForm() {
            this.resetForm();
        },
        // RESET FORM
        resetForm() {
            this.nombre = '',
            this.apellidos = '',
            this.fecha_de_nacimiento = '',
            this.sexo = '',
            this.clinica = '',
            this.tratamiento = '',
            this.check1 = '',
            this.check2 = '',
            this.check3 = '',
            this.check4 = '',
            this.check5 = '',
            this.check6 = ''
        }
    }
}
</script>



<style scoped>

</style>