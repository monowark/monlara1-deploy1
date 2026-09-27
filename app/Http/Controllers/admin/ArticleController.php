<?php
namespace App\Http\Controllers\admin;
use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use \Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;



class ArticleController extends Controller
{
    //This method will fetch all articles
    public function index () {
        $articles = Article::orderBy('created_at','DESC')->get();
            return response()->json([
             'status' => true,
             'data' => $articles
            ]);

    }

    //This method will fetch single articles
    public function show ($id) {
        $article = Article::find($id);

        if ($article == null) {
            return response()->json([
             'status' => false,
             'message' => 'Article not found.'
            ]);            
        }
            return response()->json([
             'status' => true,
             'data' => $article
            ]);

    }

    //This method will insert  article into DB
    public function store (Request $request) { //here injecting Request

        $request->merge(['slug'=> Str::slug($request->slug)]);
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:articles,slug' //duplicate slug can't be added to db & alerted.
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $article = new Article();
        $article->title = $request->title;
        $article->slug = Str::slug($request->slug);
        $article->author = $request->author;
        $article->content = $request->content;
        $article->status = $request->status;
        $article->save();

        //Save Temp Image here
        if ($request->imageId > 0) {
            //$oldImage = $project->image;
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.',$tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now').$article->id.'.'.$ext;

                //create Small thumbnail here
                $sourcePath = public_path('uploads/temp/'.$tempImage->name);
                $destPath = public_path('uploads/articles/small/'.$fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                //$image->coverDown(500, 600);
                $image->coverDown(500, 300);
                $image->save($destPath); 

                //create Large thumbnail here
                $destPath = public_path('uploads/articles/large/'.$fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1000); 
                $image->save($destPath);
                $article->image = $fileName;
                $article->save();
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Article added sucessfully.'
        ]);
    }

    public function update ($id, Request $request) {

        $article = Article::find($id);

        if ($article == null) {
            return response()->json([
             'status' => false,
             'message' => 'Article not found.'
            ]);            
        }
        $request->merge(['slug'=> Str::slug($request->slug)]);
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:articles,slug,'.$id.',id' //duplicate slug can't be added to db & alerted.
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }
        
        $article->title = $request->title;
        $article->slug = Str::slug($request->slug);
        $article->author = $request->author;
        $article->content = $request->content;
        $article->status = $request->status;
        $article->save();

        //Save Temp Image here
        if ($request->imageId > 0) {
            $oldImage = $article->image;
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.',$tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now').$article->id.'.'.$ext;

                //create Small thumbnail here
                $sourcePath = public_path('uploads/temp/'.$tempImage->name);
                $destPath = public_path('uploads/articles/small/'.$fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                //$image->coverDown(500, 600);
                $image->coverDown(500, 300);
                $image->save($destPath); 

                //create Large thumbnail here
                $destPath = public_path('uploads/articles/large/'.$fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1000); 
                $image->save($destPath);
                $article->image = $fileName;
                $article->save();

                if ($oldImage != '') {
                    File::delete(public_path('uploads/articles/large/'.$oldImage));
                    File::delete(public_path('uploads/articles/small/'.$oldImage));
                }
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Article updated sucessfully.'
        ]);
    }

    public function destroy ($id) {

        $article = Article::find($id);

        if ($article == null) {
            return response()->json([
             'status' => false,
             'message' => 'Article not found.'
            ]);            
        }

                if ($article->image != '') {
                    File::delete(public_path('uploads/articles/large/'.$article->image));
                    File::delete(public_path('uploads/articles/small/'.$article->image));
                }

                $article->delete();

                return response()->json([
                'status' => true,
                'message' => 'Article deleted successfully.'
                ]);            
    }
}
