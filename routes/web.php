<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\Admin\AdminMovieController;
use App\Http\Controllers\User\SubscriptionPlanController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('admin', function () {
//     return 'Hay Admin';
// })->middleware('role:admin');

// Route::get('user', function () {
//     return 'Hay user';
// })->middleware('role:user');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('dashboard', function () {
//     return Inertia::render('User/Dashboard/Index');
// })
//     ->middleware(['auth', 'verified'])
//     ->name('dashboard');

Route::post('midtrans/notification', [
    SubscriptionPlanController::class,
    'midtransCallback',
]);

Route::redirect('/', '/login');

Route::middleware(['auth', 'role:user'])
    ->prefix('dashboard')
    ->name('user.dashboard.')
    ->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('index');
        Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])
            ->name('movie.show')
            ->middleware('checkUserSubscription:true');
        Route::get('subscription-plan', [
            SubscriptionPlanController::class,
            'index',
        ])
            ->name('subscriptionPlan.index')
            ->middleware('checkUserSubscription:false');
        Route::post('subscription-plan/{subscriptionPlan}/user-subscribe', [
            SubscriptionPlanController::class,
            'userSubcribe',
        ])
            ->name('subscriptionPlan.userSubcribe')
            ->middleware('checkUserSubscription:false');
    });

Route::middleware(['auth', 'role:admin'])
    ->prefix('admin')
    ->name('admin.dashboard.')
    ->group(function () {
        Route::resource('/movie', AdminMovieController::class);
        Route::put('movie/{movie}/restore', [
            AdminMovieController::class,
            'restore',
        ])->name('movie.restore');
    });

Route::prefix('/prototype')
    ->name('prototype.')
    ->group(function () {
        Route::get('/login', function () {
            return Inertia::render('Prototype/Login');
        })->name('login');
        Route::get('/register', function () {
            return Inertia::render('Prototype/Register');
        })->name('register');
        Route::get('/dashboard', function () {
            return Inertia::render('Prototype/Dashboard');
            // return 'dahsboard';
        })->name('dashboard');
        Route::get('/subcriptionplan', function () {
            return Inertia::render('Prototype/SubcriptionPlan');
            // return 'haii';
        })->name('subcriptionplan');
        Route::get('/movie/{slug}', function () {
            return Inertia::render('Prototype/Movie/Show');
            // return 'haii';
        })->name('movie.show1');
    });

require __DIR__ . '/auth.php';
