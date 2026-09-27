<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel Project</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            color: #333;
            margin: 0;
            padding: 40px;
            display: flex;
            justify-content: center;
        }
        .container{
            background-color: #fff;
            max-width: 600px;
            width: 100%;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0,1);
        }
        h1{
            margin-top: 0;
            color: #f53003;
            text-aligh: center;
        }
        .project{
            border: 1px solid #eee;
            border-radius: 8px;
            padding: 15px;
            margin-bottom 15px;
            background-color: #fafafa;
        }
        .project h3{
            margin: 0 0 10px 0;
            color: #222;
            line-height: 1.5;
        }
        .project p{
            margin: 0 0 10px 0;
            color: #666;
            line-height: 1.5;
        }
        .id{
            font-weight: bold;
            color: #28a745;
            font-size: 1.1em;
        }
        .no-data{
            text-align: center;
            color: #888;
        }
    </style>
    </head>
<body>
<div class="container">
  <h1>Our Projects</h1>
@if(isset($projects) && $projects->count() > 0)
@foreach ($projects as $project)
    <div class="project">
        <h3>{{$project->title}}</h3>
        <p>{{$project->short_desc}}</p>
        <div class="id">${{ number_format($project->id, 2 ) }}</div>
    </div>
@endforeach
@else
<div class="no-data">
    <p>No projects found. Please run the migration and seeder.</p>
</div>
@endif
<div>
</body>
</html>
