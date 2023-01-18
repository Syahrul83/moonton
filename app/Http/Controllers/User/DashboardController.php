<?php

namespace App\Http\Controllers\User;

use App\Models\Movie;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use PhpParser\Node\Expr\AssignOp\Concat;

class DashboardController extends Controller
{
    public function index()
    {
        $movies = Movie::all();
        $featureMovies = Movie::whereIsFeature(true)->get();
        return inertia(
            'User/Dashboard/Index',
            compact('movies', 'featureMovies')
        );

        // return Auth::user()->LastActiveUserSubscription;

        // return [
        //     'featureMovies' => $featureMovies,
        //     'movie' => $movies,
        // ];
    }
}
