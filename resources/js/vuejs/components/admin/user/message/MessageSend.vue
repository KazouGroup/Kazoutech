<template>
    <div>
        <vue-progress-bar/>
        <div class="main-panel">
            <top-nav></top-nav>
            <div class="content">
                <div class="container-fluid">
                    <br>
                    <StatusAdmin/>
                    <br>
                    <!--<div v-if="loaded" class="row">
                        <div class="col-md-12 expo">
                            <div class="card card-stats">
                                <div :class="getColorCardUser()">
                                    <div class="card-icon">
                                        <i class="material-icons">email</i>
                                    </div>
                                    <p class="card-category"><b>Messages Box</b>
                                    <h3 class="card-title" style="color:red;"><b>{{messages.length}}</b></h3>
                                </div>
                                <div class="card-footer">
                                    <div class="stats">
                                        <i class="material-icons">email</i><b>Messages Box</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>-->
                    <div v-if="!loaded" class="submit">
                        <div class="text-center">
                            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>
                    </div>
                    <div v-if="loaded" class="row">
                        <div class="col-md-12 expo">
                            <div class="card">
                                <div :class="getColorHeaderUser()">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h4 class="card-title">
                                                <b>Messages Box</b>
                                            </h4>
                                        </div>
                                        <div class="col-md-6 text-right">
                                            <span>
                                                <i id="tooltipSize" class="material-icons">email</i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="card-body">
                                    <div class="toolbar">
                                        <div class="submit text-center">
                                            <button id="button_hover" class="btn btn-warning btn-raised" @click="newModal">
                                            <span class="btn-label">
                                               <i class="material-icons">add</i>
                                           </span>
                                                <b class="title_hover">Write your message</b>
                                            </button>
                                        </div>
                                        <NavMessage/>
                                    </div>
                                    <div class="material-datatables">
                                        <table id="datatables" class="table table-striped table-no-bordered table-hover"
                                               cellspacing="0" width="100%" style="width:100%">
                                            <thead>
                                            <tr>
                                                <th><b></b></th>
                                                <th><b></b></th>
                                                <th><b></b></th>
                                                <th class="disabled-sorting text-right"><b></b></th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th><b></b></th>
                                                <th><b></b></th>
                                                <th><b></b></th>
                                                <th class="disabled-sorting text-right"><b></b></th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            <tr v-for="item in messages" :key="item.id" v-if="item.from.id === user.id">
                                                <td>{{ (item.from.name.length > 15 ? item.from.name.substring(0,15)+ "..." : item.from.name) | upText }}</td>
                                                <td>{{ (item.object.length > 15 ? item.object.substring(0,15)+ "..." : item.object) | upText }}</td>
                                                <td><b>{{ item.created_at | myDate }}</b></td>
                                                <td class="td-actions text-right">
                                                    <router-link  :to="{ path: `/admin/messages/msg/${item.slug}` }" class="btn btn-link  btn-warning btn-round btn-just-icon" title="View message">
                                                        <i class="material-icons">visibility</i>
                                                    </router-link>
                                                    <a href="javascript:void(0)" @click="deleteItem(item.id)"
                                                       class="btn btn-link btn-danger btn-round btn-just-icon" title="Delete">
                                                        <i class="material-icons">delete_forever</i>
                                                    </a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <!-- Modal création/édition color -->
                                    <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel"
                                         aria-hidden="true">
                                        <div class="modal-dialog modal-lg" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <form id="RegisterValidation" @submit.prevent="createItem()" role="form" method="POST" action="" accept-charset="UTF-8" @keydown="form.onKeydown($event)">

                                                        <!-- <div class="form-group">
                                                             <label class="bmd-label-floating">To</label>
                                                             <input v-model="form.name" type="text" name="name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" required>
                                                             <has-error :form="form" field="name"></has-error>
                                                         </div>-->
                                                        <div class="form-group">
                                                            <label class="bmd-label-floating"></label>
                                                            <select name="name" v-model="form.to_id" id="name" class="form-control" :class="{ 'is-invalid': form.errors.has('to_id') }">
                                                                <option value="" disabled >To</option>
                                                                <option v-for="user in users" :key="user.id" :value="user.id">{{user.email}}</option>
                                                            </select>
                                                            <has-error :form="form" field="to_id"></has-error>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="bmd-label-floating"></label>
                                                            <input v-model="form.object" type="text" name="object" placeholder="Object" class="form-control" :class="{ 'is-invalid': form.errors.has('object') }" required>
                                                            <has-error :form="form" field="object"></has-error>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="bmd-label-floating">Message</label>
                                                            <textarea rows="8"  class="form-control" v-model="form.message" :class="{ 'is-invalid': form.errors.has('message') }"></textarea>
                                                            <has-error :form="form" field="name"></has-error>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <div class="text-center">
                                                                <button :disabled="form.busy" type="submit" class="btn btn-success btn-raised">
                                                                <span class="btn-label">
                                                                    <b>Send</b>
                                                                </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer-admin></footer-admin>
        </div>
    </div>
</template>

<script>
    import StatusAdmin from "../../../inc/admin/StatusAdmin";
    import NavMessage from "./NavMessage";

    export default {
        components: {NavMessage, StatusAdmin},
        data() {
            return {
                loaded: false,
                users: {},
                user: {},
                messages: {},
                color_user: '',
                form: new Form({
                    id: '',
                    object: '',
                    message: '',
                    to_id: '',
                    slug: '',
                    status: ''
                })
            }
        },
        methods: {
            mydatatables(){
                $( function () {
                    $('#datatables').DataTable({
                        "pagingType": "full_numbers",
                        "lengthMenu": [
                            [10, 25, 50, -1],
                            [10, 25, 50, "All"]
                        ],
                        order: [[ 0, 'desc' ], [ 3, 'asc' ]],
                        responsive: true,
                        stateSave: true,
                        destroy: true,
                        retrieve:true,
                        autoFill: true,
                        colReorder: true,
                        language: {
                            search: "<i class='material-icons'>search</i>",
                            searchPlaceholder: "Search Record",
                        },
                        "sPaginationType": "full_numbers",

                    });
                });
            },
            getColorCardUser(){
                return 'card-header card-header-icon card-header-' + this.user.color_name;
            },
            getColorHeaderUser(){
                return 'card-header card-header-' + this.user.color_name;
            },
            deleteItem(id) {
                //Alert delete
                Swal.fire({
                    title: 'Delete Personal Message?',
                    text: "Are you sure you want to delete this message?",
                    type: 'warning',
                    animation: false,
                    customClass: 'animated shake',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-success",
                    cancelButtonClass: 'btn btn-danger',
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'No',
                    showCancelButton: true,
                    reverseButtons: true
                }).then((result) => {
                    //Envoyer la requete au server
                    if (result.value) {
                        //Start Progress bar
                        this.$Progress.start();
                        this.form.delete('/dashboard/messages/' + id).then(() => {
                            /** Alert notify bootstrapp **/
                            var notify = $.notify('<strong>Please wait a moment</strong> ...', {
                                allow_dismiss: false,
                                showProgressbar: true
                            });
                            setTimeout(function() {
                                notify.update({'type': 'success', 'message': '<strong>Message deleted successfully.</strong>', 'progress': 75});
                            }, 2000);
                            /* End alert ***/

                            //End Progress bar
                            this.$Progress.finish();

                            Fire.$emit('AfterCreate');
                        }).catch(() => {
                            //Failled message
                            this.$Progress.fail();
                            toastr.error('', 'Ooops! Something wrong. Try later');
                        })
                    }
                })
            },
            newModal() {
                this.form.reset();
                //Masquer le modal après la création
                $('#addNew').modal('show');
            },
            loadItems() {
                //Start Progress bar
                this.$Progress.start();
                const url = "/api/messages";
                axios.get(url).then(response => {
                    this.loaded = true;
                    this.messages = response.data.data;
                    this.mydatatables()
                });
                axios.get("/api/account/user").then(response => {this.user = response.data.data});
                //End Progress bar
                this.$Progress.finish();
            },
            createItem() {
                //Start Progress bar
                this.$Progress.start();
                // Submit the form via a POST request
                this.form.post("/admin/messages")
                    .then(() => {
                        //Event
                        Fire.$emit('AfterCreate');

                        //Masquer le modal après la création
                        $('#addNew').modal('hide');

                        //Insertion de l'alert !
                        var notify = $.notify('<strong>Please wait a moment</strong> ...', {
                            allow_dismiss: false,
                            showProgressbar: true,
                            animate: {
                                enter: 'animated bounceInDown',
                                exit: 'animated bounceOutUp'
                            },
                        });
                        setTimeout(function() {
                            notify.update({'type': 'success', 'message': '<strong>Message Created Successfully.</strong>', 'progress': 75});
                        }, 2000);

                        //End Progress bar
                        this.$Progress.finish()
                    })
                    .catch(() => {
                        this.$Progress.fail();
                        toastr.error('', 'Ooops! Something wrong. Try later');
                    })
            }
        },
        created() {
            this.loadItems();
            Fire.$on('AfterCreate', () => {
                this.loadItems();
            });
        }
    }
</script>

<style scoped>

</style>
