<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    protected $table = 'stores';
    protected $primaryKey = 'StoreID';
    protected $fillable =['StoreName','StoreDescription','StoreLogo'];
}
