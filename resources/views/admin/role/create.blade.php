@extends('inc.admin._main')
@section('title', '- Admin Roles')
@section('sectionTitle', 'Roles')
@section('style')

@endsection
@section('content')
<div class="content">
    @include('inc.admin.components.status_admin')
    <div class="container-fluid">
        <br>
        <StatusAdmin/>
        <br>
        @can('create-role')
        <div class="row">
            <div class="col-md-10 col-sm-6 ml-auto mr-auto">
                {!! Form::open(array('route' => 'roles.store','files'=> 'true','method'=>'POST')) !!}
                    <div class="card ">
                        <div class="card-header card-header-warning card-header-icon">
                            <div class="card-icon">
                                <i class="material-icons">how_to_reg</i>
                            </div>
                            <h4 class="card-title">
                                <b>Create Role</b>
                            </h4>
                        </div>

                        @include('admin.partials.role.form',['role' => new \Spatie\Permission\Models\Role()])

                        <br><br><hr>
                        <div class="submit">
                            <div class="text-center">
                                <a href="{{route('roles.index')}}" class="btn btn-info btn-raised btn-round">
                                    <span class="btn-label">
                                        <i class="material-icons">undo</i>
                                    </span>
                                    <b>Back</b>
                                </a>
                                <button type="submit" class="btn btn-success btn-raised btn-round">
                                    <span class="btn-label">
                                        <i class="material-icons">save_alt</i>
                                    </span>
                                    <b>Create</b>
                                </button>
                            </div>
                            <br>
                        </div>
                    </div>

                {!! Form::close() !!}
            </div>
        </div>
        @else
        <div class="submit text-center">
            @include('inc.admin.components.alert_permission')
        </div>
        @endcan
    </div>
</div>
@include('inc.admin._footer')

@endsection
@section('script')

<script type="text/javascript">

    function setFormValidation(id){
        $(id).validate({
            highlight: function(element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
            },
            success: function(element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
            },
            errorPlacement : function(error, element) {
                $(element).append(error);
            },
        });
    }

    $(document).ready(function(){
        setFormValidation('#RegisterValidation');
        setFormValidation('#TypeValidation');
        setFormValidation('#LoginValidation');
        setFormValidation('#RangeValidation');
    });
</script>


<script>
    $(function () {
        //Initialize Select2 Elements
        $('.select2').select2()

    })
</script>
@endsection
