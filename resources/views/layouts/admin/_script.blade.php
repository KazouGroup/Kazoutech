@routes
<script src="/assets/dashboard/assets/js/core/jquery.min.js" type="text/javascript"></script>
<script src="/assets/dashboard/assets/js/core/popper.min.js" type="text/javascript"></script>
<script src="/assets/dashboard/assets/js/core/bootstrap-material-design.min.js" type="text/javascript"></script>
<script src="/assets/dashboard/assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
<!-- Plugin for the momentJs  -->
<script src="/assets/dashboard/assets/js/plugins/moment.min.js"></script>
<!--  Plugin for Sweet Alert -->
<script src="/assets/dashboard/assets/js/plugins/sweetalert2.js"></script>
<!-- Forms Validations Plugin -->
<script src="/assets/dashboard/assets/js/plugins/jquery.validate.min.js"></script>
<!--  Plugin for the Wizard, full documentation here: https://github.com/VinceG/twitter-bootstrap-wizard -->
<script src="/assets/dashboard/assets/js/plugins/jquery.bootstrap-wizard.js"></script>
<!--	Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select -->
<script src="/assets/dashboard/assets/js/plugins/bootstrap-selectpicker.js"></script>
<!--  Plugin for the DateTimePicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker/ -->
<script src="/assets/dashboard/assets/js/plugins/bootstrap-datetimepicker.min.js"></script>
<!--  DataTables.net Plugin, full documentation here: https://datatables.net/    -->
<script src="/assets/dashboard/assets/js/plugins/jquery.dataTables.min.js"></script>
<!--	Plugin for Tags, full documentation here: https://github.com/bootstrap-tagsinput/bootstrap-tagsinputs  -->
<script src="/assets/dashboard/assets/js/plugins/bootstrap-tagsinput.js"></script>
<!-- Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
<script src="/assets/dashboard/assets/js/plugins/jasny-bootstrap.min.js"></script>
<!--  Full Calendar Plugin, full documentation here: https://github.com/fullcalendar/fullcalendar    -->
<script src="/assets/dashboard/assets/js/plugins/fullcalendar.min.js"></script>
<!-- Vector Map plugin, full documentation here: http://jvectormap.com/documentation/ -->
<script src="/assets/dashboard/assets/js/plugins/jquery-jvectormap.js"></script>
<!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
<script src="/assets/dashboard/assets/js/plugins/nouislider.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.3.3/bootbox.min.js"></script>

<!-- Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support SweetAlert -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
<!-- Library for adding dinamically elements -->
<script src="/assets/dashboard/assets/js/plugins/arrive.min.js"></script>
<!-- Chartist JS -->
<script src="/assets/dashboard/assets/js/plugins/chartist.min.js"></script>
<!--  Notifications Plugin    -->
<script src="/assets/dashboard/assets/js/plugins/bootstrap-notify.js"></script>
<!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
<script src="/assets/dashboard/assets/js/material-dashboard.js?v=2.1.0" type="text/javascript"></script>
<!-- Script personaliser a modifier en cas de besion -->
<script src="/assets/dashboard/assets/js/myscript.js?v=1.0.0" type="text/javascript"></script>


<script src="{{ mix('/js/vuejs/axios.js') }}"></script>
<script src="{{ mix('/js/vuejs/app.js') }}"></script>
<!--
<script type="text/javascript">
    var timer = setInterval("autoRefresher()", 60 * 70000);
    function autoRefresher(){self.location.reload(true);}
</script>
-->
<script>
    $(document).ready(function(){
        $('body').append(
            '<a id="toTop" class="btn btn-outline-success btn-sm" href="#" title="Go to Top Page">' +
            '<i class="material-icons top-button">arrow_upward</i>' +
            '</a>');
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
</script>


@if(config('app.env') != 'local')
@endif

@section('script')

@show
