<?php
namespace App\Http\Controllers\front;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
    //this function will return all articles
    public function index () {
        $articles = Article::orderBy('created_at', 'DESC')
        ->where('status',1)
        ->get();
        return response ()->json([
            'status' => true,
            'data' => $articles
        ]);        
    }

    //this function will return latest articles
    public function latestArticles (Request $request) {
        $articles = Article::orderBy('created_at', 'DESC')
        ->where('status',1)
        ->limit($request->limit)
        ->get();
        return response ()->json([
            'status' => true,
            'data' => $articles
        ]);
    }

    //this function will return single article
    public function article ($id) {
        $article = Article::find($id);

        if($article == null) {
            return response ()->json([
                'status' => false,
                'message' => 'Article not found.'
            ]);            
        }

        return response ()->json([
            'status' => true,
            'data' => $article
        ]);
    }
}
