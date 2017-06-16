<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $stores=Store::all();
            return response()->json(['status'=>'200','message'=>'data retrieved successfully','stores'=>$stores]);

        } catch (Exception $e) {
            return response()->json(['status'=>'500','message'=>'there is a problem retrieving the data']);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $store= Store::where('storeID', $id)->first();
            return response()->json(['status'=>'200','message'=>'data retrieved successfully','store'=>$store]);
        } catch (Exception $e) {
            return response()->json(['status'=>'500','message'=>'there is a problem retrieving the data']);
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return response()->json(['status'=>$_FILES,'message'=>'data updated successfully']);

        try {
            $store = Store::updateOrCreate(
                ['storeID' => $id],
                ['StoreName' => $request->StoreName,'StoreDescription'=>$request->StoreDescription,'StoreLogo'=>$request->StoreLogo]
            );

            Store::where('storeID', $id)
                ->update($request->all());

            return response()->json(['status'=>'200','message'=>'data updated successfully']);
        } catch (Exception $e) {
            return response()->json(['status'=>'500','message'=>'there is a problem updating the data']);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $store= Store::where('storeID', $id)->first();
            $store->delete();
            return response()->json(['status'=>'200','message'=>'data deleted successfully']);
        } catch (Exception $e) {
            return response()->json(['status'=>'500','message'=>'there is a problem deleting the data']);
        }



    }
}
