<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Http\Controllers\Controller;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

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

    public function userSubcribe(
        Request $request,
        SubscriptionPlan $subscriptionPlan
    ) {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths(
                $subscriptionPlan->active_period_in_months
            ),
            'payment_status' => 'paid',
            // 'snapToken' => $subscriptionPlan->snapToken,
        ];

        UserSubscription::create($data);
        return redirect(route('user.dashboard.index'));
    }
}
