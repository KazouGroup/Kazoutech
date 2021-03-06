<?php

namespace App\Model\admin\info;

use App\Model\user\User;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Support\Facades\Cache;
use OwenIt\Auditing\Contracts\Auditable;

class legalnotice extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;

    protected $table = 'legalnotices';

    protected $fillable = ['body', 'ip','status','user_id'];
    /**
     * @return array
     */
    public function generateTags(): array
    {
        return [
            $this->user->name,
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function isOnline()
    {
        return Cache::has('user-is-online-' . $this->id);
    }

    protected static function boot()
    {
        parent::boot();

        self::creating(function ($model){
            $model->ip = request()->ip();
        });
    }
}
