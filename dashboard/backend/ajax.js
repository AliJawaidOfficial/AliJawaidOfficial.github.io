// Projects
$("#Projects-Table").on("click", ".action_btn.edit", function() {
    let projectKey = $(this).attr("data-bs-project-key");
    $("section").each(function() {
        $(this).removeClass("active");
    });
    $(".Projects-Edit").addClass("active");
    $("#ProjectsEditKey").val(projectKey);
});
$("#EditProjectBackBtn").click(function(e) {
    $("section").each(function() {
        $(this).removeClass("active");
    });
    $(".Projects").addClass("active");
    $("#ProjectsEditKey").val("");
});
$("#Projects-Table").on("click", ".action_btn.delete", function() {
    let projectKey = $(this).attr("data-bs-skill-key");
    swal({
        title: "Are You Sure?",
        text: "You Wan't To Delete It.",
        icon: "warning",
        buttons: true,
        buttons: ["No", "Yes"],
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            swal({
                icon: "success",
                title: "Project Deleted Successfully!",
                text: " ",
                timer: 2000,
                buttons: [false, false]
            }).then(($result) => {
                location.reload;
            });
            console.log(projectKey);
        }
    });
});
// Show Image
let projectImageUpload = document.querySelector("#upload-project-image");
if (projectImageUpload) {
    let projectImage = projectImageUpload.querySelector("#upload-project-image-input");
    let projectImagePreview = projectImageUpload.querySelector("#upload-project-image-preview");
    projectImage.addEventListener('change', function() {
        let projectChoosedImage = this.files[0];
        if (projectChoosedImage) {
            let projectChoosedImageUpload = new FileReader();
            projectChoosedImageUpload.addEventListener('load', function() {
                projectImagePreview.setAttribute('src', projectChoosedImageUpload.result);
            });
            projectChoosedImageUpload.readAsDataURL(projectChoosedImage);
        }
    });
}
let projectEditImageUpload = document.querySelector("#upload-edit-project-image");
if (projectEditImageUpload) {
    let projectEditImage = projectEditImageUpload.querySelector("#upload-edit-project-image-input");
    let projectEditImagePreview = projectEditImageUpload.querySelector("#upload-edit-project-image-preview");
    projectEditImage.addEventListener('change', function() {
        let projectEditChoosedImage = this.files[0];
        if (projectEditChoosedImage) {
            let projectEditChoosedImageUpload = new FileReader();
            projectEditChoosedImageUpload.addEventListener('load', function() {
                projectEditImagePreview.setAttribute('src', projectEditChoosedImageUpload.result);
            });
            projectEditChoosedImageUpload.readAsDataURL(projectEditChoosedImage);
        }
    });
}



// Qualification
$("#Qualification-Table").on("click", ".action_btn.edit", function() {
    let qualificationKey = $(this).attr("data-bs-qualification-key");
    $("section").each(function() {
        $(this).removeClass("active");
    });
    $(".Qualification-Edit").addClass("active");
    $("#QualificationEditKey").val(qualificationKey);
});
$("#EditQualificationBackBtn").click(function(e) {
    $("section").each(function() {
        $(this).removeClass("active");
    });
    $(".Qualification").addClass("active");
    $("#QualificationEditKey").val("");
});
$("#Qualification-Table").on("click", ".action_btn.delete", function() {
    let qualificationKey = $(this).attr("data-bs-skill-key");
    swal({
        title: "Are You Sure?",
        text: "You Wan't To Delete It.",
        icon: "warning",
        buttons: true,
        buttons: ["No", "Yes"],
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            swal({
                icon: "success",
                title: "Qualification Deleted Successfully!",
                text: " ",
                timer: 2000,
                buttons: [false, false]
            }).then(($result) => {
                location.reload;
            });
            console.log(qualificationKey);
        }
    });
});



// Skills
$("#Skills-Table").on("click", ".action_btn.edit", function() {
    let skillKey = $(this).attr("data-bs-skill-key");
    $("section").each(function() {
        $(this).removeClass("active");
    });
    $(".Skills-Edit").addClass("active");
    $("#SkillEditKey").val(skillKey);
});
$("#EditSkillBackBtn").click(function(e) {
    $("section").each(function() {
        $(this).removeClass("active");
    });
    $(".Skills").addClass("active");
    $("#SkillEditKey").val("");
});
$("#Skills-Table").on("click", ".action_btn.delete", function() {
    let skillKey = $(this).attr("data-bs-skill-key");
    swal({
        title: "Are You Sure?",
        text: "You Wan't To Delete It.",
        icon: "warning",
        buttons: true,
        buttons: ["No", "Yes"],
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            swal({
                icon: "success",
                title: "Skill Deleted Successfully!",
                text: " ",
                timer: 2000,
                buttons: [false, false]
            }).then(($result) => {
                location.reload;
            });
            console.log(skillKey);
        }
    });
});




// Skills
$("#Testinomials-Table").on("click", ".action_btn.edit", function() {
    let testimonialKey = $(this).attr("data-bs-testimonial-key");
    $("section").each(function() {
        $(this).removeClass("active");
    });
    $(".Testinomials-Edit").addClass("active");
    $("#TestimonialEditKey").val(testimonialKey);
});
$("#EditTestimonialBackBtn").click(function(e) {
    $("section").each(function() {
        $(this).removeClass("active");
    });
    $(".Testinomials").addClass("active");
    $("#TestimonialEditKey").val("");
});
$("#Testinomials-Table").on("click", ".action_btn.delete", function() {
    let testimonialKey = $(this).attr("data-bs-testimonial-key");
    swal({
        title: "Are You Sure?",
        text: "You Wan't To Delete It.",
        icon: "warning",
        buttons: true,
        buttons: ["No", "Yes"],
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            swal({
                icon: "success",
                title: "Testinomial Deleted Successfully!",
                text: " ",
                timer: 2000,
                buttons: [false, false]
            }).then(($result) => {
                location.reload;
            });
            console.log(testimonialKey);
        }
    });
});
// Show Image
let testimonialImageUpload = document.querySelector("#upload-testimonial-image");
if (testimonialImageUpload) {
    let testimonialImage = testimonialImageUpload.querySelector("#upload-testimonial-image-input");
    let testimonialImagePreview = testimonialImageUpload.querySelector("#upload-testimonial-image-preview");
    testimonialImage.addEventListener('change', function() {
        let testimonialChoosedImage = this.files[0];
        if (testimonialChoosedImage) {
            let testimonialChoosedImageUpload = new FileReader();
            testimonialChoosedImageUpload.addEventListener('load', function() {
                testimonialImagePreview.setAttribute('src', testimonialChoosedImageUpload.result);
            });
            testimonialChoosedImageUpload.readAsDataURL(testimonialChoosedImage);
        }
    });
}
let testimonialEditImageUpload = document.querySelector("#upload-edit-testimonial-image");
if (testimonialEditImageUpload) {
    let testimonialEditImage = testimonialEditImageUpload.querySelector("#upload-edit-testimonial-image-input");
    let testimonialEditImagePreview = testimonialEditImageUpload.querySelector("#upload-edit-testimonial-image-preview");
    testimonialEditImage.addEventListener('change', function() {
        let testimonialEditChoosedImage = this.files[0];
        if (testimonialEditChoosedImage) {
            let testimonialEditChoosedImageUpload = new FileReader();
            testimonialEditChoosedImageUpload.addEventListener('load', function() {
                testimonialEditImagePreview.setAttribute('src', testimonialEditChoosedImageUpload.result);
            });
            testimonialEditChoosedImageUpload.readAsDataURL(testimonialEditChoosedImage);
        }
    });
}