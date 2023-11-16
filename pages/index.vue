<script setup lang="ts">
import Login from '~/components/Login.vue';
const dummyPlayerData = ref([
  {
    name: 'John Doe',
    team: 'Wildcats',
    position: 'Guard',
    points: 23,
    avatar: '',
    description:
      "Clad in neon-lit armor with a sleek black visor obscuring her face, Jade is a notorious hacker in the cyberpunk cityscape, known for her quick wits and faster code. Her right arm, a custom cybernetic enhancement equipped with various hacking interfaces, is both a tool and a weapon in the neon-drenched underworld. Jade's reputation is as enigmatic as her past, whispered about in the hushed tones of both awe and fear in the shadowy back alleys of the digital frontier.",
  },
]);
</script>

<template>
  <!--   <h1>Arasaka Asset Manager</h1>
  <div>Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen. Denn esse est percipi - Sein ist wahrgenommen werden. Und weil Sie nun schon die Güte haben, mich ein paar weitere Sätze lang zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen, das es ebenso verdient wahrgenommen zu werden: Webstandards nämlich. Sehen Sie, Webstandards sind das Regelwerk, auf dem Webseiten aufbauen. So gibt es Regeln für HTML, CSS, JavaScript oder auch XML; Worte, die Sie vielleicht schon einmal von Ihrem Entwickler gehört haben. Diese Standards sorgen dafür, dass alle Beteiligten aus einer Webseite</div> -->
  <div class="w-full h-full flex justify-center items-center">
    <PlayerCard
      v-for="(player, index) in dummyPlayerData"
      :key="index"
      :name="player.name"
      :team="player.team"
      :position="player.position"
      :points="player.points"
      :avatar="player.avatar"
      :description="player.description"
    />
  </div>
</template>

<style scoped></style>
