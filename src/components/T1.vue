<template>
    <div>
        t1
        {{ data.test }}
    </div>
</template>

<script>

export default ({
    name: 'T1',
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
