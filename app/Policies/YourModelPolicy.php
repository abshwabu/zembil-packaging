<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class YourModelPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true; // Or your authorization logic
    }
} 