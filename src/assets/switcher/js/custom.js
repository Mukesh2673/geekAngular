    // ______________ SWITCHER-toggle ______________//
    /*Theme Layouts*/
    $(document).on("click", '#myonoffswitch10', function() {
        if (this.checked) {
            $('.sidebar-mini').addClass('default-sidebar');
            $('.sidebar-mini').removeClass('color-sidebar');
            $('.sidebar-mini').removeClass('dark-sidebar');
            $('.sidebar-mini').addClass('light-mode');
            localStorage.setItem("default-sidebar", "True");
        } else {
            $('.sidebar-mini').removeClass('default-sidebar');
            localStorage.setItem("default-sidebar", "false");
        }
    });
    /*Theme Layouts*/
    $(document).on("click", '#myonoffswitch11', function() {
        if (this.checked) {
            $('.sidebar-mini').addClass('color-sidebar');
            $('.sidebar-mini').removeClass('default-sidebar');
            $('.sidebar-mini').removeClass('dark-sidebar');
            localStorage.setItem("color-sidebar", "True");
        } else {
            $('.sidebar-mini').removeClass('color-sidebar');
            localStorage.setItem("color-sidebar", "false");
        }
    });
    /*Theme Layouts*/
    $(document).on("click", '#myonoffswitch12', function() {
        if (this.checked) {
            $('.sidebar-mini').addClass('dark-sidebar');
            $('.sidebar-mini').removeClass('color-sidebar');
            $('.sidebar-mini').removeClass('default-sidebar');
            localStorage.setItem("dark-sidebar", "True");
        } else {
            $('.sidebar-mini').removeClass('dark-sidebar');
            localStorage.setItem("dark-sidebar", "false");
        }
    });

        /*-- width styles ---*/
        $(document).on("click",'#myonoffswitch18', function() {
            if (this.checked) {
                $('body').addClass('default');
                $('body').removeClass('boxed');
                localStorage.setItem("default", "True");
            } else {
                $('body').removeClass('default');
                localStorage.setItem("default", "false");
            }
        });
        $(document).on("click", '#myonoffswitch19', function() {
            if (this.checked) {
                $('body').addClass('boxed');
                $('body').removeClass('default');
                localStorage.setItem("boxed", "True");
            } else {
                $('body').removeClass('boxed');
                localStorage.setItem("boxed", "false");
            }
        });

        /*Theme Layouts*/
        $(document).on("click", '#myonoffswitch3', function() {
            if (this.checked) {
                $('body').addClass('card-radius');
                localStorage.setItem("card-radius", "True");
            } else {
                $('body').removeClass('card-radius');
                localStorage.setItem("card-radius", "false");
            }
        });
    
        /*Theme Layouts*/
        $(document).on("click", '#myonoffswitch4', function() {
            if (this.checked) {
                $('body').addClass('card-shadow');
                localStorage.setItem("card-shadow", "True");
            } else {
                $('body').removeClass('card-shadow');
                localStorage.setItem("card-shadow", "false");
            }
        });

        /*Theme Layouts*/
    $(document).on("click", '#myonoffswitch5', function() {
        if (this.checked) {
            $('body').addClass('default-body');
            $('body').removeClass('light-dark-body');
            $('body').removeClass('white-body');
            $('body').removeClass('default-leftmenu');
            $('body').removeClass('style1-leftmenu');
            localStorage.setItem("default-body", "True");
        } else {
            $('body').removeClass('default-body');
            localStorage.setItem("default-body", "false");
        }
    });

    /*Theme Layouts*/
    $(document).on("click", '#myonoffswitch6', function() {
        if (this.checked) {
            $('body').addClass('white-body');
            $('body').removeClass('default-body');
            $('body').removeClass('light-dark-body');
            $('body').removeClass('default-leftmenu');
            $('body').removeClass('style1-leftmenu');
            localStorage.setItem("white-body", "True");
        } else {
            $('body').removeClass('white-body');
            localStorage.setItem("white-body", "false");
        }
    });

    /*Theme Layouts*/
    $(document).on("click", '#myonoffswitch7', function() {
        if (this.checked) {
            $('body').addClass('light-dark-body');
            $('body').removeClass('default-body');
            $('body').removeClass('white-body');
            $('body').removeClass('default-leftmenu');
            $('body').removeClass('style1-leftmenu');
            localStorage.setItem("light-dark-body", "True");
        } else {
            $('body').removeClass('light-dark-body');
            localStorage.setItem("light-dark-body", "false");
        }
    });

    
    /*Theme Layouts*/
    $(document).on("click", '#myonoffswitch8', function() {
        if (this.checked) {
            $('body').addClass('light-mode');
            $('body').removeClass('dark-mode');
            $('.sidebar-mini').removeClass('dark-sidebar');
            $('.sidebar-mini').addClass('light-mode');
            $('body').removeClass('default-leftmenu');
            $('body').removeClass('style1-leftmenu');
            localStorage.setItem("light-mode", "True");
        } else {
            $('body').removeClass('light-mode');
            localStorage.setItem("light-mode", "false");
        }
    });
    $(document).on("click", '#myonoffswitch9', function() {
        if (this.checked) {
            $('body').addClass('dark-mode');
            $('.sidebar-mini').removeClass('light-mode');
            $('body').removeClass('light-mode');
            $('body').removeClass('default-leftmenu');
            $('body').removeClass('style1-leftmenu');
            localStorage.setItem("dark-mode", "True");
        } else {
            $('body').removeClass('dark-mode');
            localStorage.setItem("dark-mode", "false");
        }
    });
