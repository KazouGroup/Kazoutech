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
                     <div v-if="!loaded" class="submit">
                         <loader-ellipsis/>
                     </div>
                     <div v-if="loaded" class="row">
                         <div class="col-md-12">
                             <div class="container">
                                 <div class="row">
                                     <div class="col-md-12 expo">
                                         <div class="card">
                                             <div :class="getColorCardUser()" style="margin-top: -5px;">
                                                 <div class="card-icon">
                                                     <i class="material-icons">chat</i>
                                                 </div>
                                                 <br>
                                                 <h4 class="card-title" style="margin-top: 0px;"><b>Edit</b> -
                                                     <small class="category">Update Testimonial</small>
                                                 </h4>
                                             </div>
                                             <div class="card-body">
                                                 <form id="RegisterValidation" @submit.prevent="updateItem()" role="form"
                                                       method="POST" action="" accept-charset="UTF-8" @keydown="form.onKeydown($event)">
                                                     <div class="row">
                                                         <div class="col-md-6">
                                                             <div class="form-group">
                                                                 <label class="bmd-label-floating"></label>
                                                                 <input v-model="form.role" type="text" name="role"
                                                                        class="form-control" :class="{ 'is-invalid': form.errors.has('role') }" placeholder="Qui ete vous ?">
                                                                 <has-error :form="form" field="role"></has-error>
                                                             </div>
                                                         </div>
                                                         <div class="col-md-4">
                                                             <div class="form-group">
                                                                 <rate :length="5" :value="form.stars_evaluation" disabled
                                                                       class="form-control" :ratedesc="['Very bad', 'bad', 'Normal', 'Good', 'Very good']" />
                                                             </div>
                                                         </div>
                                                     </div>
                                                     <div class="row">
                                                         <div class="col-md-12">
                                                             <div class="tab-content">
                                                                 <div class="tab-pane active" id="profile">
                                                                     <div class="form-group">
                                                                         <label class="bmd-label-floating">Description <span style="color:red;">*</span></label>
                                                                         <br>
                                                                         <vue-editor v-model="form.body" :editorToolbar="customToolbar"></vue-editor>
                                                                         <has-error :form="form" field="body"></has-error>
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     </div>
                                                     <hr>
                                                     <div class="submit">
                                                         <div class="text-center">
                                                             <router-link :to="{ name: 'testimonials.index' }" class="btn btn-danger" id="button_hover">
                                                                 <i class="material-icons">chevron_left</i>
                                                                 <b class="title_hover">Back</b>
                                                             </router-link>
                                                             <button v-if="$auth.can('edit-testimonial')" id="button_hover" :disabled="form.busy" type="submit" class="btn btn-success btn-raised">
                                                                 <i class="material-icons">save_alt</i>
                                                                 <b class="title_hover">Update</b>
                                                             </button>
                                                             <router-link :to="{ name: 'testimonials.vector', params: { testimonial: form.slug  } }" class="btn btn-warning" id="button_hover">
                                                                 <i class="material-icons">visibility</i>
                                                                 <b class="title_hover">View</b>
                                                             </router-link>
                                                         </div>
                                                     </div>
                                                 </form>
                                             </div>
                                             <br>
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
    import api from "../../../../routes/admin/testimonial";

    export default {
        components: {StatusAdmin },
        data() {
            return {
                loaded: false,
                editmode: false,
                user:{},
                form: new Form({
                    id: '',
                    ip: '',
                    user_id: '',
                    stars_evaluation: '',
                    slug: '',
                    role: '',
                    body: ''
                }),
                customToolbar: [
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'font': [] }],
                    //[{ 'header': [false, 1, 2, 3, 4, 5, 6, ] }],
                    //[{ 'size': ['small', false, 'large', 'huge'] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'align': [] }],
                    //[{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['blockquote', 'code-block'],
                    //['blockquote', 'code-block'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
                    //[{ 'script': 'sub'}, { 'script': 'super' }],
                    //[{ 'indent': '-1'}, { 'indent': '+1' }],
                    [{ 'color': [] }, { 'background': [] }],
                    //['link', 'image', 'video', 'formula'],
                    ['link'],
                    //[{ 'direction': 'rtl' }],
                    ['clean'],
                    //['emoji'],
                ]
            }
        },
        methods: {
            getColorCardUser(){
                return 'card-header card-header-icon card-header-' + this.user.color_name;
            },
            updateItem() {
                //Start Progress bar
                this.$Progress.start();

                this.form.put('/dashboard/testimonials/' + this.form.id)
                    .then(() => {

                        /** Debut de l'alert **/
                        var notify = $.notify('<strong>Please wait a moment</strong> ...', {
                            allow_dismiss: false,
                            showProgressbar: true
                        });
                        setTimeout(function() {
                            notify.update({'type': 'success', 'message': '<strong>Member updated successfully.</strong>', 'progress': 75});
                        }, 2000);
                        setTimeout(() => this.$router.push({  name: `testimonials.index` }));
                        //setTimeout(() => this.$router.push({  path: `/dashboard/testimonials/tm/${this.form.slug}` }));
                        /** Fin alert **/

                        //End Progress bar
                        this.$Progress.finish();
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
        },
        created() {
            //Start Progress bar
            this.$Progress.start();
            api.testimonialID(this.$route.params.id).then(({data}) => {
                this.loaded = true;
                this.form.fill(data.data);
            });
            axios.get("/api/account/user").then(response => {this.user = response.data.data});
            //End Progress bar
            this.$Progress.finish();
        }
    }
</script>

<style scoped>

</style>

