@extends('layout.front_app')
@section('title','black-nav')
@section('project','active')
@section('heading')

@if(!$result->description == NULL)
  <section class="details-content-section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12">
          <div class="img-wrapper pb-3">
            <div class="row no-gutters">
                <div class="col-12 col-md-12">
                    <div class="img-inner">
                      @if($main_image)
                        <img class="img-fluid w-100" src="{{asset($main_image->details_image)}}" alt="Image 1">
                        @else
                        <img class="img-fluid w-100" src="{{asset($default_image->details_image)}}" alt="Image 1">
                        @endif
                    </div>
                </div>

                @foreach($result_images as $image)
                <div class="col-4 col-md-4">
                    <div class="img-inner">
                        <img class="img-fluid w-100" src="{{asset($image->details_image)}}" alt="Image 2">
                    </div>
                </div>
                @endforeach
               
            </div>
          </div>
        </div>
        <div class="col-12 col-md-12">
          <div id="">
              {{-- <h1 class="title">{{$result->title}}</h1> --}}
              <p class="text">{!! $result->description !!}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  @else
  <section class="no-vacancy">
    <div class="container">
      <div class="content">
        <h1 class="title">Currently no Details available</h1>
        <p class="text"></p>
      </div>
    </div>
  </section>
  
  @endif



  <!-- help section start -->
  <section class="help-section">
    <div class="container">
      <div class="help-wrapper">
        <div class="help-content">
          <h2>{{$query->question}}</h2>
          <h3>{{$query->answer}}</h3>
        </div>
        <div class="help-icon">
          <a href="{{route('front.info')}}"><i class="fas fa-angle-right"></i></a>
        </div>
      </div>
    </div>
  </section>
 





@endsection