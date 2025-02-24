<?php

namespace App\Filament\Resources\BlogResource\Pages;

use App\Filament\Resources\BlogResource;
use Filament\Resources\Pages\CreateRecord;
use Filament\Notifications\Notification;

class CreateBlog extends CreateRecord
{
    protected static string $resource = BlogResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $userId = auth()->id();
        
        if (!$userId) {
            Notification::make()
                ->title('Error')
                ->body('You must be logged in to create a blog post.')
                ->danger()
                ->send();
                
            throw new \Exception('No authenticated user found');
        }
        
        $data['author_id'] = $userId;
        
        return $data;
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
