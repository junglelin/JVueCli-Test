<template>
    <div>
        t6
        {{ data.test }}
    </div>
</template>

<script>

export default ({
    name: 'T6',
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
