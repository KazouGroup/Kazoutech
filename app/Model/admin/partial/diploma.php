<?php

namespace App\Model\admin\partial;

use App\Model\user\technician;
use App\Model\user\User;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Spatie\Activitylog\Traits\LogsActivity;

class diploma extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    use LogsActivity;

    protected $fillable = ['name','user_id','ip','status'];
    protected static $logAttributes = ['name','user_id','ip','status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * save and deleting image
     */
    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub

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

    use Sluggable;

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [

            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function technicians()
    {
        return $this->hasMany(technician::class);
    }
}