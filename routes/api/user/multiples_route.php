<?php

Route::get('occupations/{occupation}','MultiplesRouteController@apioccupationbyslug')->name('occupations.view');
Route::get('occupations/{occupation}/{categoryoccupation}','MultiplesRouteController@apicategoryoccupationbyslug')->name('categoryoccupations.view');


Route::get('blog','MultiplesRouteController@apiblogs')->name('api_active.blogs');
Route::get('blog/{occupation}','MultiplesRouteController@apiblogsoccupation')->name('api_blog_occupation_site.view');
Route::get('blog/{occupation}/{blog}','MultiplesRouteController@apiblogsoccupationslug')->name('api_blog_site.view');
Route::get('all_last_blogs','MultiplesRouteController@apilastblogs')->name('api_active_last.blogs');
Route::get('all_last_blogs_interesse/{occupation}','MultiplesRouteController@apilastblogsinteresse')->name('api_active_interesse.blogs');


Route::get('annonces/v/{city}','MultiplesRouteController@apiannoncesbycity')->name('api_annonce_by_city_site.view');
Route::get('annonces/{occupation}/v/{city}','MultiplesRouteController@apiannoncesbyoccupationbycity')->name('api_annonce_city_site.view');


Route::get('charbonneurs','MultiplesRouteController@apicharbonneurs')->name('api_active_charbonneurs');
Route::get('charbonneurs/{occupation}','MultiplesRouteController@apicharbonneursbyoccupation')->name('api_active_charbonneurs_occupation.view');
Route::get('charbonneurs/{occupation}/{city}','MultiplesRouteController@apicharbonneursbyoccupationcity')->name('api_active_charbonneurs_occupation_city.view');

Route::get('temoignages','MultiplesRouteController@apitemoignages')->name('api_active_testimonials');



Route::get('conditions','MultiplesRouteController@apiconditions')->name('api_active.conditions');
Route::get('licences','MultiplesRouteController@apilicences')->name('api_active.licences');
Route::get('confidentialities','MultiplesRouteController@apiconfidentialities')->name('api_active.confidentialities');
