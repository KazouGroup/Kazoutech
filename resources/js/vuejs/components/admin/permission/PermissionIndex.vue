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
                    <template v-if="$auth.can('view-role-permission')">
                        <div v-if="loaded" class="row">
                            <div class="col-md-12 expo">
                                <div class="card card-stats">
                                    <div :class="getColorCardUser()">
                                        <div class="card-icon">
                                            <i class="material-icons">visibility</i>
                                        </div>
                                        <p class="card-category"><b>All Permissions</b></p>
                                        <h3 class="card-title" style="color:red;"><b>{{permissions.length}}</b></h3>
                                    </div>
                                    <div class="card-footer">
                                        <div class="stats">
                                            <i class="material-icons">visibility</i><b>All Permissions</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <errored-loading v-if="errored"/>
                        <div v-if="!loaded" class="submit">
                            <LoaderLdsDefault/>
                        </div>
                        <div v-if="loaded" class="row">
                            <div class="col-md-12 expo">
                                <div class="card">
                                    <div :class="getColorHeaderUser()">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h4 class="card-title">
                                                    <b>Datatables Permissions</b>
                                                </h4>
                                                <p class="card-title">
                                                    Administrators Permissions
                                                </p>
                                            </div>
                                            <div class="col-md-6 text-right">
                                                <span>
                                                    <i id="tooltipSize" class="material-icons">visibility</i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="toolbar">
                                            <div class="header text-right">
                                                <button @click="reload" class="btn btn-success btn-raised btn-round button_note btn-sm"
                                                        title="Refresh Page">
                                                    <i class="material-icons">replay</i>
                                                    <b class="title_hover">Refresh</b>
                                                </button>
                                            </div>
                                            <div class="submit text-center">
                                                <button id="button_hover" class="btn btn-success btn-raised btn-round" @click="newModal">
                                                    <span class="btn-label">
                                                        <i class="material-icons">playlist_add_check</i>
                                                    </span>
                                                    <b class="title_hover">New Permission</b>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="material-datatables">
                                            <table id="datatables" class="table table-striped table-no-bordered table-hover"
                                                   cellspacing="0" width="100%" style="width:100%">
                                                <thead>
                                                <tr>
                                                    <th><b>Permission Name</b></th>
                                                    <th><b>Guard Name</b></th>
                                                    <th><b>Last Update</b></th>
                                                    <th class="disabled-sorting text-right"><b>Actions</b></th>
                                                </tr>
                                                </thead>
                                                <tfoot>
                                                <tr>
                                                    <th><b>Permission Name</b></th>
                                                    <th><b>Guard Name</b></th>
                                                    <th><b>Last Update</b></th>
                                                    <th class="text-right"><b>Actions</b></th>
                                                </tr>
                                                </tfoot>
                                                <tbody>
                                                <tr v-for="item in permissions" :key="item.id">
                                                    <td>{{ item.name }}</td>
                                                    <td>{{ item.guard_name}}</td>
                                                    <td><b>{{ item.updated_at | myDate }}</b></td>
                                                    <td class="td-actions text-right">
                                                        <a href="javascript:void(0)" @click="editItem(item)"
                                                           class="btn btn-link  btn-success btn-round btn-just-icon" title="Edit">
                                                            <i class="material-icons">edit</i>
                                                        </a>
                                                        <a href="javascript:void(0)" @click="deleteItem(item.id)"
                                                           class="btn btn-link btn-danger btn-round btn-just-icon" title="Delete">
                                                            <i class="material-icons">delete_forever</i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <!-- Modal création/édition Permission -->
                                        <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel"
                                             aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 v-show="!editmode" class="modal-title" id="addNewLabel"><b>New Permission</b></h5>
                                                        <h5 v-show="editmode" class="modal-title" id="updateNewLabel"><b>Update Permission</b></h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form id="RegisterValidation" @keydown="form.onKeydown($event)" @submit.prevent="editmode ? updateItem() : createItem()" role="form" method="POST" action="" accept-charset="UTF-8">
                                                            <div class="form-group">
                                                                <label class="bmd-label-floating"></label>
                                                                <input v-model="form.name" type="text" name="name" placeholder="Permission Name"
                                                                       class="form-control" :class="{ 'is-invalid': form.errors.has('name') }"  @keydown="error=false">
                                                                <has-error :form="form" field="name"></has-error>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <div class="text-center">
                                                                    <button type="button" class="btn btn-danger" data-dismiss="modal">
                                                                        <span class="btn-label">
                                                                            <i class="material-icons">clear</i>
                                                                            <b>Close</b>
                                                                        </span>
                                                                                    </button>
                                                                                    <button v-show="!editmode" type="submit" class="btn btn-success btn-raised">
                                                                        <span class="btn-label">
                                                                            <i class="material-icons">check</i>
                                                                            <b>Yes, Save</b>
                                                                        </span>
                                                                                    </button>
                                                                                    <button v-show="editmode" type="submit" class="btn btn-success btn-raised">
                                                                        <span class="btn-label">
                                                                            <i class="material-icons">save_alt</i>
                                                                            <b>Yes, Update</b>
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
                    </template>
                    <div v-else="$auth.can('view-role-permission')" class="container-fluid">
                        <alert-permission/>
                    </div>
                </div>
            </div>
            <footer-admin></footer-admin>
        </div>

    </div>
</template>

<script>
    import StatusAdmin from "../../inc/admin/StatusAdmin"
    import LoaderLdsDefault from "../../inc/animation/LoaderLds-default";
    export default {
        components: {LoaderLdsDefault, StatusAdmin},
        data() {
            return {
                loaded: false,
                errored: false,
                editmode: false,
                user: {},
                permissions: {},
                form: new Form({
                    id: '',
                    name: '',
                    guard_name: ''
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
                        order: [[ 0, 'asc' ], [ 3, 'desc' ]],
                        responsive: true,
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
				let colorUser = 'card-header card-header-icon card-header-' + this.user.color_name;
				return colorUser;
			},
            getColorHeaderUser(){
				let colorUser = 'card-header card-header-' + this.user.color_name;
				return colorUser;
			},

            createItem() {
                this.$Progress.start();
                // Submit the form via a POST request
                this.form.post("/dashboard/permissions").then(() => {

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
                        notify.update({'type': 'success', 'message': '<strong>Permission Created Successfully.</strong>', 'progress': 75});
                    }, 2000);
                    //Fin insertion de l'alert !

                    //End Progress bar
                    this.$Progress.finish();

                    Fire.$emit('ItemGetter');
                }).catch(() => {
                    //Failled message
                    this.$Progress.fail();
                    //Alert error
                    $.notify("Ooops! Something wrong. Try later", {
                        type: 'danger',
                        animate: {
                            enter: 'animated bounceInDown',
                            exit: 'animated bounceOutUp'
                        }
                    });
                })
            },
            updateItem() {
                //Start Progress bar
                this.$Progress.start();

                this.form.put('/dashboard/permissions/' + this.form.id)
                    .then(() => {
                        //Masquer le modal après la création
                        $('#addNew').modal('hide');

                        /** Debut de l'alert **/
                        var notify = $.notify('<strong>Please wait a moment</strong> ...', {
                            allow_dismiss: false,
                            showProgressbar: true
                        });
                        setTimeout(function() {
                          notify.update({'type': 'success', 'message': '<strong>Permission updated successfully.</strong>', 'progress': 75});
                        }, 2000);
                        /** Fin alert **/

                        //End Progress bar
                        this.$Progress.finish();

                        //Event
                        Fire.$emit('ItemGetter');
                    }).catch(() => {
                        //Failled message
                        this.$Progress.fail();
                        $.notify("Ooops! Something wrong. Try later", {
                            type: 'danger',
                            animate: {
                                enter: 'animated bounceInDown',
                                exit: 'animated bounceOutUp'
                            }
                        });
                    })
            },
            editItem(item) {
                this.editmode = true;
                this.form.reset();
                //Masquer le modal après la création
                $('#addNew').modal('show');
                //On passe les information
                this.form.fill(item);
            },
            newModal() {
                this.editmode = false;
                this.form.reset();
                //Masquer le modal après la création
                $('#addNew').modal('show');
            },

            deleteItem(id) {
                Swal.fire({
                    title: 'Delete Permission?',
                    text: "Are you sure you want to delete this permission?",
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

                        this.form.delete('/dashboard/permissions/' + id).then(() => {
                            /** Alert notify bootstrapp **/
                            var notify = $.notify('<strong>Please wait a moment</strong> ...', {
                                allow_dismiss: false,
                                showProgressbar: true
                            });
                            setTimeout(function() {
                              notify.update({'type': 'success', 'message': '<strong>Permission deleted successfully.</strong>', 'progress': 75});
                            }, 2000);
                            /*** End alert ***/

                            //End Progress bar
                            this.$Progress.finish();

                            Fire.$emit('ItemGetter');
                        }).catch(() => {
                            //Failled message
                            this.$Progress.fail();
                            $.notify("Ooops! Something wrong. Try later", {
                                type: 'danger',
                                animate: {
                                    enter: 'animated bounceInDown',
                                    exit: 'animated bounceOutUp'
                                }
                            });
                        })
                    }
                })
            },
            loadItems() {
                //Start Progress bar
                this.$Progress.start();
                const url = "/api/permissions";
                axios.get(url).then(response => {
                    this.loaded = true;
                    this.permissions = response.data.data;
                    this.mydatatables();
                    //End Progress bar
                    this.$Progress.finish()
                }).catch(error => {
                    console.log(error);
                    this.errored = true
                });
                axios.get("/api/account/user").then(response => {this.user = response.data.data});
            },
             reload(){
                this.loadItems();
            },
        },
        created() {
            this.loadItems();
            Fire.$on('ItemGetter', () => {
                this.loadItems();
            });
        }
    }

</script>

<style scoped>

</style>
