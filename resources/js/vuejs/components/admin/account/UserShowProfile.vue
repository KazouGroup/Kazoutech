<template>
    <div>
        <vue-progress-bar/>
        <div class="main-panel">
            <top-nav></top-nav>
            <div class="content">
                <div class="container-fluid">
                    <br>
                    <StatusAdmin/>
                    <!-- Ici on va mettre le status de l'admin -->
                    <br>
                    <div class="row">
                        <div class="col-md-12 ml-auto mr-auto">
                            <div class="page-categories">
                                <ul :class="getPillsColorName()" role="tablist">
                                    <li class="nav-item">
                                        <a id="button_face" class="nav-link active" data-toggle="tab" href="#profile" role="tablist">
                                            <i class="material-icons">face</i> Profile
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a id="button_message" class="nav-link" data-toggle="tab" href="#link8" role="tablist">
                                            <i class="material-icons">location_on</i> Location
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a id="button_faqs" class="nav-link" data-toggle="tab" href="#link9" role="tablist">
                                            <i class="material-icons">gavel</i> Legal Info
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a id="button_orders" class="nav-link" data-toggle="tab" href="#link10" role="tablist">
                                            <i class="material-icons">help_outline</i> Help Center
                                        </a>
                                    </li>
                                </ul>
                                <div class="tab-content tab-space tab-subcategories">
                                    <div class="tab-pane active" id="profile">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-8 expo">
                                                    <div class="card">
                                                        <div :class="getUserColorName()" style="margin-top: -5px;">
                                                            <div class="card-icon">
                                                                <i class="material-icons">perm_identity</i>
                                                            </div>
                                                            <h4 class="card-title">
                                                                Profile <b v-text="user.name"></b>
                                                            </h4>
                                                        </div>
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div class="col-md-5">
                                                                    <div class="form-group">
                                                                        <label>Company ({{company}})</label>
                                                                        <input type="text" class="form-control" v-model="company" disabled>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="form-group">
                                                                        <label>Name</label>
                                                                        <input type="text" class="form-control" name="name" id="name" v-model="user.name" disabled/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="form-group">
                                                                        <label>Username</label>
                                                                        <input type="text" class="form-control" name="username" id="username" v-model="user.username" disabled/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <div class="form-group">
                                                                        <label>Sex</label>
                                                                        <input type="text" class="form-control" name="sex" id="sex" v-model="user.sex" disable/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="form-group">
                                                                        <label>Email</label>
                                                                        <input type="text" class="form-control" name="email" id="email" v-model="user.email" disabled />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="form-group">
                                                                        <label>Tel</label>
                                                                        <input type="text" class="form-control" name="phone" id="phone" v-model="user.cellphone" disabled/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Address</label>
                                                                        <input type="text" class="form-control" name="address" id="address" v-model="user.address" disabled/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Postal Code</label>
                                                                        <input type="text" class="form-control" name="cap" id="cap" v-model="user.cap" disabled/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <div class="form-group">
                                                                        <label>Work</label>
                                                                        <input type="text" class="form-control" name="work"  v-model="user.work" disabled/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <div class="form-group">
                                                                        <label>About Me</label>
                                                                        <div class="form-group">
                                                                            <p v-html="user.body"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr>
                                                            <div class="text-center">
                                                                <router-link id="button_hover" :to="{ name: 'administrators.index' }" class="btn btn-danger btn-raised btn-round">
                                                                    <span class="btn-label">
                                                                        <i class="material-icons">chevron_left</i>
                                                                    </span>
                                                                    <b class="title_hover">Back</b>
                                                                </router-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 expo">
                                                    <div class="card card-profile">
                                                        <div class="card-avatar">
                                                            <a href="#pablo">
                                                                <img class="img" :src="user.avatar" :alt="user.name" />
                                                            </a>
                                                        </div>
                                                        <div class="card-body">
                                                            <h6><span v-for="role in user.roles" :class="getRoleName(role)"><b>{{role}}</b></span></h6>
                                                            <h6 v-if="user.statusOnline"><span class="badge badge-success" title="User online">Online</span></h6>
                                                            <h6 v-else="user.statusOnline"><span class="badge badge-danger" title="user offline">Offline</span></h6>
                                                            <h6 class="card-category text-gray">{{ user.work }}</h6>
                                                            <h4 class="card-title"><b>Sex:</b> {{ user.sex }}</h4>
                                                            <h4 class="card-title"><b>Age:</b> {{ user.age }} ans</h4>
                                                            <h4 class="card-title"><b>{{ user.name }} {{ user.first_name }}</b></h4>
                                                            <h4 class="card-title"><b>Member Since:</b> <b style="color: green;"> {{ user.created_at | formatDate }}</b></h4>
                                                            <h4 class="card-title"><b>Last Login:</b> <b style="color: red;"> {{ user.last_sign_in_at | dateAgo }}</b></h4>
                                                            <follow-user :user-id="user.id"></follow-user>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="link8">
                                        <div class="card">
                                            <div class="card-header">
                                                <h4 class="card-title">Location of the product</h4>
                                                <p class="card-category">
                                                    More information here
                                                </p>
                                            </div>
                                            <div class="card-body">
                                                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                                                <br>
                                                <br> Dramatically maintain clicks-and-mortar solutions without functional solutions.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="link9">
                                        <div class="card">
                                            <div class="card-header">
                                                <h4 class="card-title">Legal info of the product</h4>
                                                <p class="card-category">
                                                    More information here
                                                </p>
                                            </div>
                                            <div class="card-body">
                                                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                                                <br>
                                                <br>Dynamically innovate resource-leveling customer service for state of the art customer service.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="link10">
                                        <div class="card">
                                            <div class="card-header">
                                                <h4 class="card-title">Help center</h4>
                                                <p class="card-category">
                                                    More information here
                                                </p>
                                            </div>
                                            <div class="card-body">
                                                From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right.
                                                <br>
                                                <br> Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.
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
    import api from '../../../api/mixins/collections';
    import FooterAdmin from "../../inc/admin/FooterAdmin";
    import StatusAdmin from "../../inc/admin/StatusAdmin";
    export default {
        components: {StatusAdmin, FooterAdmin},
        props: ['company'],
        data() {
            return {
                user:{},
            };
        },
        methods: {
            getUserColorName(){
                return 'card-header card-header-icon card-header-' + this.user.color_name;
            },
            getPillsColorName(){
                let colorpills = 'nav nav-pills nav-pills-icons justify-content-center nav-pills-' + this.user.color_name;
                return colorpills;
            },
            getRoleName(role) {
                if (role === 'super-admin') {
                    return 'badge badge-pill badge-info';
                }
                if (role === 'admin') {
                    return 'badge badge-pill badge-success';
                }
                if (role === 'visitor') {
                    return 'badge badge-pill badge-secondary';
                }
                if (role === 'editor') {
                    return 'badge badge-pill badge-warning';
                }
                if (role === 'advertiser') {
                    return 'badge badge-pill badge-danger';
                }
                if (role === 'moderator') {
                    return 'badge badge-pill badge-primary';
                }
            },
        },
        created() {
            //Start Progress bar
            this.$Progress.start();
            api.userShow(this.$route.params.username).then(response => {this.user = response.data.data});
            //End Progress bar
            this.$Progress.finish();
        }
    };
</script>

<style scoped>

</style>
