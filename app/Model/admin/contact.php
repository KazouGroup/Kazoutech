<?php

namespace App\Model\admin;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class contact extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    use LogsActivity;

    protected $fillable = ['first_name', 'last_name', 'subject', 'email', 'status', 'message','bookmark'];
    protected static $logAttributes = ['first_name', 'last_name','ip','subject', 'email', 'status', 'message','bookmark'];

    protected static function boot()
    {
        parent::boot();

        self::creating(function ($model){
            $model->ip = request()->ip();
        });
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
