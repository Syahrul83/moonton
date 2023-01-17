<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use Illuminate\Http\Request;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        $subscriptionPlan = SubscriptionPlan::all();

        //  return $subscriptionPlan;
        return inertia(
            'User/Dashboard/SubcriptionPlan',
            compact('subscriptionPlan')
        );
    }
}
