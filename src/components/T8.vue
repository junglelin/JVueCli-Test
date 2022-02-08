<template>
    <div>
        t8
        {{ data.test }}
    </div>
</template>

<script>

export default ({
    name: 'T8',
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
