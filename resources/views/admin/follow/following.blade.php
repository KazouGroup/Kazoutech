@extends('inc.admin._main')
@section('title', '| Dashboard following')


@section('style')

@endsection

@section('init')
    <!-- Site wrapper -->
@endsection

@section('content')
    @if(Auth::user()->my_status === 'active')
        <router-view follow="{{auth()->user()->isFollowing($user)}}"></router-view>
    @else
        <div class="submit text-center">
            <error-404></error-404>
        </div>
    @endif
@endsection

@section('script')

@endsection