<?php

namespace App\Model\admin\info;

use App\Model\user\User;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use OwenIt\Auditing\Contracts\Auditable;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class documentation extends Model implements Auditable
{
    use LogsActivity,\OwenIt\Auditing\Auditable;

    protected $table = 'documentations';
    protected $guarded = [];
    protected static $logAttributes = ['name','id'];


    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }

    /**
     * save and deleting image
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model){
            if (auth()->check()){
                $model->user_id = auth()->id();
            }
            $model->ip = request()->ip();
        });
        static::updating(function($model){
            if (auth()->check()){
                $model->user_id = auth()->id();
            }
            $model->ip = request()->ip();
        });
    }

    public function isOnline()
    {
        return Cache::has('user-is-online-' . $this->id);
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->logOnly(['name']);
          logOnlyDirty()
        ->dontSubmitEmptyLogs();    
    }


    use Sluggable;
    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name',
                'separator' => '+'
            ]
        ];
    }


    public function getUploadPath()
    {
        //return 'documentation/'. $this->id .'/';
        return 'documentation' . DIRECTORY_SEPARATOR . $this->id . DIRECTORY_SEPARATOR;
    }


}
