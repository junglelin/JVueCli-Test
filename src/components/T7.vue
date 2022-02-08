<template>
    <div>
        t7
        {{ data.test }}
    </div>
</template>

<script>

export default ({
    name: 'T7',
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
