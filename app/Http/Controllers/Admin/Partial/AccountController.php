<?php

namespace App\Http\Controllers\Admin\Partial;

use App\Http\Requests\User\Account\UpdateRequest;
use App\Http\Resources\UserResource;
use App\Model\user\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;

class AccountController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth',['except' => ['api','view']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        return view('admin.account.profile',compact('user'));
    }

    public function api()
    {
        return UserResource::collection(User::with('my_country')
            ->where('my_status','0')
            ->latest()->get());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($username)
    {
        if($username) {
            $user = User::where('username', $username)->firstOrFail();
        } else {
            $user = User::findOrFail(auth()->user()->id);
        }
        return view("admin.account.profile_user")->withUser($user);
    }

    public function userShow($username)
    {
        $user = new UserResource(User::where('username', $username)->firstOrFail());
        return $user;
    }


    public function view($username)
    {
        $user = new UserResource(User::where('username', $username)->firstOrFail());
        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        $user = Auth::user();
        return view('admin.account.edit_profile',compact('user'));
    }

    public function profileEdit()
    {
        $user = Auth::user();
        return view('user.profile.profileEdit',compact('user'));
    }




    public function user()
    {
        $user = new UserResource(auth()->user());
        return $user;
    }

    public function userEdit()
    {
        $user = auth()->user();
        return $user;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $this->validate($request,[
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255','alpha_dash','unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],

        ]);

        User::create([
            'name' => $request['name'],
            'username' => $request['username'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);

        return ['message' => 'User has been created'];


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return array|\Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        //dd(request()->all()); // pour tester les donner qui entre dans la base de donner
        $user = auth()->user();
        /**
         * Avatr image upload
         */
        $currentPhoto = $user->avatar;
        if ($request->avatar != $currentPhoto){

            $namefile = sha1(date('YmdHis') . str_random(30));
            $name = $namefile .'.' . explode('/',explode(':',substr($request->avatar,0,strpos
                ($request->avatar,';')))[1])[1];

            $dir = 'assets/img/avatars/user/';
            if(!file_exists($dir)){
                mkdir($dir, 0775, true);
            }
            Image::make($request->avatar)->fit(400,400)->save(public_path('assets/img/avatars/user/').$name);


            $request->merge(['avatar' =>  "/assets/img/avatars/user/{$name}"]);

            // Ici on suprimme l'image existant
            $oldFilename = $currentPhoto;
            File::delete(public_path($oldFilename));
        }

        /**
         * Coverpage Uploade
         */
        $currentCoverPhoto = $user->avatarcover;
        if ($request->avatarcover != $currentCoverPhoto){

            $namefile = sha1(date('YmdHis') . str_random(30));
            $name = $namefile .'.' . explode('/',explode(':',substr($request->avatarcover,0,strpos
                ($request->avatarcover,';')))[1])[1];

            $dir = 'assets/img/avatarcovers/user/';
            if(!file_exists($dir)){
                mkdir($dir, 0775, true);
            }
            Image::make($request->avatarcover)->save(public_path('assets/img/avatarcovers/user/').$name);


            $request->merge(['avatarcover' =>  "/assets/img/avatarcovers/user/{$name}"]);

            // Ici on suprimme l'image existant
            $oldCoverFilename = $currentCoverPhoto;
            File::delete(public_path($oldCoverFilename));
        }

        $user->update($request->only(
            'name',
            'email',
            'username',
            'color_name',
            'avatar',
            'avatarcover',
            'password',
            'country_id'
        ));
        return ['message' => 'User has been updated'];
    }

}
