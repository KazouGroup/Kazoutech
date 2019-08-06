<?php

namespace App\Http\Controllers\Admin\Info;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Info\PolicyprivacyResource;
use App\Model\admin\info\policyprivacy;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class PolicyprivacyController extends Controller
{
     /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth',['except' => ['api']]);
        // Middleware lock account
        //$this->middleware('auth.lock');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.info.policyprivacy.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.info.policyprivacy.create');
    }

    public function api()
    {
        return PolicyprivacyResource::collection(Policyprivacy::with('user')->latest()->get());
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'body'=>'required|string'
        ]);
        
        $policyprivacy = new policyprivacy;
        $policyprivacy->body = $request->body;
        
        $policyprivacy->save();

        return response('Created',Response::HTTP_CREATED);
    }

    /**
     * cette partie consite a activer et a desactiver
     * @param $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */

    public function disable(policyprivacy $policyprivacy, $id)
    {
        $policyprivacy = policyprivacy::where('id', $id)->findOrFail($id);
        $policyprivacy->update([
            'status' => 0,
            'user_id' => auth()->user()->id,
        ]);
        return response('Deactivated',Response::HTTP_ACCEPTED);
    }

    public function active(policyprivacy $policyprivacy, $id)
    {
        $policyprivacy = policyprivacy::where('id', $id)->findOrFail($id);
        $policyprivacy->update([
            'status' => 1,
            'user_id' => auth()->user()->id,
        ]);
        return response('Deactivated',Response::HTTP_ACCEPTED);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return PolicyprivacyResource|\Illuminate\Http\Response
     */
    public function show($id)
    {
        $policyprivacy = new PolicyprivacyResource(policyprivacy::where('id', $id)->findOrFail($id));
        return $policyprivacy;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $policyprivacy = Policyprivacy::where('id',$id)->first();
        return view('admin.info.policyprivacy.edit', compact('policyprivacy'));
    }

    public function view($id)
    {
        $policyprivacy = new PolicyprivacyResource(policyprivacy::where('id',$id)->findOrFail($id));
        return $policyprivacy;
    }

    public function vector(policyprivacy $policyprivacy,$id)
    {

        $policyprivacy = policyprivacy::where('id',$id)->findOrFail($id);
        return view('admin.info.policyprivacy.view', compact('policyprivacy'));
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return array|\Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'body'=>'required|string',
        ]);
        
        $policyprivacy = policyprivacy::first();
        $policyprivacy->user_id = auth()->user()->id;

        $policyprivacy->save();

        return ['message' => 'updated successfully'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return array|\Illuminate\Http\Response
     */
    public function destroy($id)
    {
       $policyprivacy = Policyprivacy::findOrfail($id);
       $policyprivacy -> delete();

       return ['message' => 'policyprivacy deleted'];
    }
}