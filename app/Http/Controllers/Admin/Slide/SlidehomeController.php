<?php

namespace App\Http\Controllers\Admin\Slide;

use App\Http\Controllers\Controller;
use App\Http\Requests\SlideHomes\StoreRequest;
use App\Http\Requests\SlideHomes\UpdateRequest;
use App\Http\Resources\Slide\SlideHomeResource;
use App\Model\admin\slide\slidehome;
use App\Services\Admin\SlidehomeService;
use File;
use Symfony\Component\HttpFoundation\Response;

class SlidehomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth',['except' => ['api','bystatussitesapi']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('admin.slide.slidehome.index');
    }

    public function api()
    {
        $slidehomes = SlideHomeResource::collection(slidehome::with('user')->latest()->get());

        return response()->json($slidehomes,200);
    }

    public function bystatussitesapi()
    {
        $slidehomes = SlideHomeResource::collection(slidehome::where('status',1)->with('user')->latest()->get());

        return response()->json($slidehomes,200);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.slide.slidehome.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        $slidehome= new slidehome();
        $slidehome->fill($request->all());;

        SlidehomeService::storeUploadImage($request,$slidehome);

        $slidehome->save();

        return response('Created',Response::HTTP_CREATED);
    }



    /**
     * @param slidehome $slidehome
     * @return \Illuminate\Http\JsonResponse
     */
    public function status(slidehome $slidehome)
    {
        $slidehome->update(['status' => !$slidehome->status]);

        return response()->json($slidehome);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $slidehome = new SlideHomeResource(slidehome::where('id', $id)->findOrFail($id));

        return response()->json($slidehome,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $slidehome = slidehome::where('id', $id)->findOrFail($id);
        return view('admin.slide.slidehome.edit', compact('slidehome'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateRequest $request, $id)
    {
        $slidehome = slidehome::findOrFail($id);

        SlidehomeService::updateUploadeImage($request,$slidehome);

        $slidehome->update($request->all());

        return response()->json($slidehome,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return array|\Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $slidehome = slidehome::findOrFail($id);
        $oldFilename = $slidehome->photo;
        File::delete(public_path($oldFilename));

        $slidehome->delete();

        return ['message' => 'Deleted successfully'];
    }
}
