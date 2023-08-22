<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">StudyFury</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <router-link to="/suite">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page">Suite</a>
                        </li>
                    </router-link>

                    <router-link to="/blog">
                        <li class="nav-item">
                            <a class="nav-link">Blog</a>
                        </li>
                    </router-link>

                    <router-link to="/focus">
                        <li class="nav-item">
                            <a class="nav-link">Focus</a>
                        </li>
                    </router-link>

                    <router-link to="/todo">
                        <li class="nav-item">
                            <a class="nav-link">ToDo</a>
                        </li>
                    </router-link>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-outline-danger" type="submit">Exit</button>
                </form>
            </div>
        </div>
    </nav>
</template>


<script>
    export default {
        name: 'suiteNavbar'
    }
</script>