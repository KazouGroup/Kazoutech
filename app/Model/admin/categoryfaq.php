<?php

namespace App\Model\admin;

use App\Model\user\User;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Spatie\Activitylog\Traits\LogsActivity;

class categoryfaq extends Model
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

    public function faqs()
    {
        return $this->hasMany(faq::class);
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
}
