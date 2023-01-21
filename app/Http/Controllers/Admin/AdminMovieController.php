<?php

namespace App\Http\Controllers\Admin;

use App\Models\Movie;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Admin\Movie\Store;
use App\Http\Requests\Admin\Movie\Update;

class AdminMovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies = Movie::all();
        return inertia('Admin/Movie/Index', compact('movies'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        // $fileName = time() . '.' . $request->thumbnail->extension();
        // $request->file->move(public_path('uploads'), $fileName);

        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put(
            'movies',
            $request->file('thumbnail')
        );
        $data['slug'] = Str::slug($data['name']);
        Movie::create($data);

        return redirect()
            ->route('admin.dashboard.movie.index')
            ->with([
                'message' => 'Movie Insert Succesfuly',
                'type' => 'success',
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit(Movie $movie)
    {
        return inertia('Admin/Movie/Edit', compact('movie'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Update $request, Movie $movie)
    {
        $data = $request->validated();

        if ($request->file('thumbnail')) {
            $data['thumbnail'] = Storage::disk('public')->put(
                'movie',
                $request->file('thumbnail')
            );
        } else {
            $data['thumbnail'] = $movie->thumbnail;
        }
        $data['slug'] = Str::slug($movie['name']);

        $movie->update($data);

        return redirect()
            ->route('admin.dashboard.movie.index')
            ->with([
                'message' => 'Movie Update Succesfuly',
                'type' => 'success',
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {
        //
    }
}
