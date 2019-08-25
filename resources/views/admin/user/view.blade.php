@extends('inc.admin._main')
<?php $usernameTag = htmlspecialchars($user->name); ?>
@section('title',"- $usernameTag")


@section('style')

@endsection

@section('init')
    <!-- Site wrapper -->
@endsection

@section('content')
    @if(Auth::user()->my_status === 'active')
        <transition name="fade">
            <keep-alive>
                <router-view follow="{{auth()->user()->isFollowing($user)}}"></router-view>
            </keep-alive>
        </transition>
    @else
        <div class="submit text-center">
            @include('inc.admin.alert_permission')
        </div>
    @endif
@endsection

@section('script')

@endsection