<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    protected $table = 'stores';
    protected $fillable =['StoreID','StoreName','StoreDescription','StoreLogo'];
}
