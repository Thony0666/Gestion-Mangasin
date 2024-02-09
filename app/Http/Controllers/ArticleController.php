<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateArticleRequest;
use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{

    public function getArticles(): JsonResponse
    {
        $articles = Article::paginate(10);

        return response()->json([
            'articles' => ArticleResource::collection($articles)
        ]);
    }

    public function getArticle(int $id): JsonResponse
    {
        $article = Article::find($id);

        if (!$article) {
            return response()->json([
                'message' => 'Article not found',
            ], 404);
        }

        return response()->json([
            'article' => new ArticleResource($article),
        ]);
    }

    public function storeOrUpdateArticle(CreateArticleRequest $request, $id = null): JsonResponse
    {
        $article = $id ? Article::find($id) : new Article();
        $article->fill($this->extractData($request, $article));
        $article->save();

        return response()->json([
            "article" => new ArticleResource($article)
        ]);
    }

    public function extractData(CreateArticleRequest $request, ?Article $article = null): array
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;

        if ($image instanceof \Illuminate\Http\UploadedFile && !$image->getError()) {
            if ($article && $article->image !== null) {
                Storage::disk("public")->delete($article->image);
            }
            $data["image"] = $image->store("profiles", "public");
        }

        return $data;
    }


    public function destroy(int $id): JsonResponse
    {
        $article = Article::find($id);

        if (!$article) {
            return response()->json([
                'message' => 'Article not found',
            ], 404);
        }

        if ($article->image) {
            Storage::disk("public")->delete($article->image);
        }

        $article->delete();

        return response()->json([
            'message' => 'Article deleted successfully',
        ]);
    }
}
