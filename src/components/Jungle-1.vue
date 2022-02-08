<template>
    <div>
        Jungle - 1
        {{ data.test }}
    </div>
</template>

<script>

export default ({
    name: 'Jungle - 1',
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
