<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateArticleRequest;
use App\Http\Requests\CreateUserRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\UserResource;
use App\Models\Article;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{

    public function getArticles():JsonResponse
    {
        return response()->json([
            'articles' => UserResource::collection(Article::all())
        ]);
    }

    public function getArticle(int $id): JsonResponse
    {
        $article = Article::find($id);

        if (!$article) {
            return response()->json([
                'message' => 'User not found',
            ], 404);
        }

        return response()->json([
            'article' => new UserResource($article),
        ]);
    }

    public function storeOrUpdateArticle(CreateArticleRequest $request, $id = null): JsonResponse
    {
        if ($id !== null) {
            $article = Article::findOrFail($id);
            $article->update($this->extractData($request, $article));
        } else {
            $article = article::create($this->extractData($request, new Article()));
        }
        return response()->json([
            "article" => new ArticleResource($article)
        ]);
    }

    public function extractDataImage(CreateUserRequest $request, ?Article $article = null): array
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;

        if ($image instanceof UploadedFile && !$image->getError()) {
            if ($article->image !== null) {
                Storage::disk("public")->delete($article->image);
            }
            $data["image"] = $image->store("profiles", "public");
        }

        return $data;
    }


    public function destroy(int $id): JsonResponse
    {
        $article = Article::find($id);
        $res = Article::find($id);

        if (!$article) {
            return response()->json([
                'message' => 'User not found',
            ], 404);
        }

        if ($article->image) {
            Storage::disk("public")->delete($article->image);
        }

        $article->delete();

        return response()->json([
            'article' => new ArticleResource($res),
        ]);
    }
}
