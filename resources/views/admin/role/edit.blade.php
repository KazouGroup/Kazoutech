@extends('inc.admin._main')
@section('title', '- Admin Roles')
@section('sectionTitle', 'Roles')
@section('style')
@endsection

@section('content')
<div class="content">

    <div class="container-fluid">

        <div class="main-panel" id="javascriptComponents">
            <!-- Navbar -->


        <!-- le can('est la protection de la permission ') -->
        @can('edit-role')

        <!-- form init -->
        <div class="row">
            <div class="col-md-12 col-sm-6 ml-auto mr-auto">

                {!! Form::model($role, ['files'=> 'true','method' => 'PATCH','route' => ['roles.update', $role->id], 'id' => 'RegisterValidation']) !!}
                    <div class="card ">
                        <div class="card-header card-header-warning card-header-icon">
                            <div class="card-icon">
                                <i class="material-icons">how_to_reg</i>
                            </div>
                            <h4 class="card-title">
                                <b>Update Role</b>
                            </h4>
                        </div>

                        @include('admin.role.form')

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
                                    <b>Update</b>
                                </button>
                            </div>
                            <br>
                        </div>
                        <br>
                    </div>
                {!! Form::close() !!}
            </div>
        </div>
        @endcan
    </div>
</div>


@endsection
@section('script')

<script>
    $(function () {
        //Initialize Select2 Elements
        $('.select2').select2()

    })
</script>
@endsection