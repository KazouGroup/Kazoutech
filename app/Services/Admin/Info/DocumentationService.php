<?php


namespace App\Services\Admin\Info;


use Illuminate\Support\Facades\Storage;

class DocumentationService
{

    public static function uploadDocumentation($path, $file, $old_filename)
    {
        $disk = Storage::disk('public')->put($path, $file);

        $old_path = $path . $old_filename;
        if($disk->exists($old_path))
            $disk->delete($old_path);

        $filename = 'file.' . $file->getClientOriginalExtension();
       // $filename = ''. $file->getClientOriginalName();
        $disk->putFileAs($path, $file, $filename);

        return $filename;
    }


}