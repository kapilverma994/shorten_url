<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Url extends Model
{
    protected $fillable=['original_url','short_url'];

    protected static function boot(){
        parent::boot();
        static::creating(function($url){
$url->short_url=Str::random();
        });
    }

    public function getRouteKeyName(){
        return 'short_url';
    }
}
