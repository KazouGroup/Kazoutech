@routes
<!-- Core -->
<script src="/assets/vendor_site/js/core/jquery.min.js" type="text/javascript"></script>
<script src="/assets/vendor_site/js/core/popper.min.js" type="text/javascript"></script>
<script src="/assets/vendor_site/js/core/bootstrap.min.js" type="text/javascript"></script>
<script src="/assets/vendor_site/js/plugins/perfect-scrollbar.jquery.min.js"></script>
<!--  Plugin for Switches, full documentation here: http://www.jque.re/plugins/version3/bootstrap.switch/ -->
<script src="/assets/vendor_site/js/plugins/bootstrap-switch.js"></script>
<!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
<script src="/assets/vendor_site/js/plugins/nouislider.min.js" type="text/javascript"></script>
<!--  Plugin for the Carousel, full documentation here: http://jedrzejchalubek.com/ -->
<script src="/assets/vendor_site/js/plugins/glide.js" type="text/javascript"></script>
<!--  Plugin for the DatePicker, full documentation here: https://flatpickr.js.org/ -->
<script src="/assets/vendor_site/js/plugins/moment.min.js"></script>
<!--	Plugin for Select, full documentation here: https://joshuajohnson.co.uk/Choices/ -->
<script src="/assets/vendor_site/js/plugins/choices.min.js" type="text/javascript"></script>
<!--  Plugin for the DateTimePicker, full documentation here: https://flatpickr.js.org/ -->
<script src="/assets/vendor_site/js/plugins/datetimepicker.js" type="text/javascript"></script>
<!-- Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
<script src="/assets/vendor_site/js/plugins/jasny-bootstrap.min.js"></script>
<!-- Plugin for Headrom, full documentation here: https://wicky.nillia.ms/headroom.js/ -->
<script src="/assets/vendor_site/js/plugins/headroom.min.js"></script>
<!-- Control Center for Argon UI Kit: parallax effects, scripts for the example pages etc -->
<!--  Google Maps Plugin    -->
<!--
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
-->
<script src="/assets/dashboard/assets/js/plugins/sweetalert2.js"></script>
<script src="/assets/vendor_site/js/argon-design-system.min.js?v=1.0.2" type="text/javascript"></script>
<script src="/assets/dashboard/assets/js/plugins/bootstrap-notify.js"></script>
<!-- JavaScript KazouTech -->

<!--
<script src="/assets/js/kazoutech.js"></script>
-->
<script src="{{ mix('/js/reactjs/app.js') }}"></script>
<script>
    $(document).ready(function(){
        $('body').append('<a id="toTop" class="btn btn-primary btn-sm" href="#" title="Go to Top Page"><i class="fa fa-arrow-up"></i></a>');
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop, #search-top').fadeIn();
            } else {
                $('#toTop, #search-top').fadeOut();
            }
        });
        $('#toTop, #search-top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });
    setTimeout(function() { window.location=window.location;},10400000);
</script>

@section('script')

@show
