@extends('inc.user._main')
<?php $item = htmlspecialchars(config('app.name'));?>
@section('title', 'Nouvelle annonce '.$occupation->name.' | '.$item)

@section('style')
@endsection

@section('init')
    <!-- Site wrapper -->
@endsection

@section('content')
    <div id="app_kazoutech"></div>
@endsection

@section('script')

@endsection
