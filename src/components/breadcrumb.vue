<template>
    <div>
        breadcrumb
        {{ data }}
    </div>
</template>

<script>

export default ({
    name: 'articlelist',
    props: {
        data: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
})
</script>
