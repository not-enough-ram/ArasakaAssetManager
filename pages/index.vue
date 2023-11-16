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
      'John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again. John is known for his incredible agility and speed on the court. With a keen eye for strategy and a relentless drive, he leads his team to victory time and time again.',
  },
  {
    name: 'Jane Smith',
    team: 'Mavericks',
    position: 'Forward',
    points: 19,
    avatar: '',
    description:
      'Jane stands out as a formidable forward, using her height and strength to dominate the court. Her ability to read the game makes her a valuable player for the Mavericks.',
  },
  {
    name: 'Mike Johnson',
    team: 'Raptors',
    position: 'Center',
    points: 21,
    avatar: '',
    description:
      'With his impressive wingspan and timing, Mike is a defensive wall for the Raptors. He is a key player when it comes to rebounds and blocks.',
  },
  {
    name: 'Emily Clark',
    team: 'Bulls',
    position: 'Point Guard',
    points: 18,
    avatar: '',
    description:
      'Emily’s ball-handling skills and court vision have made her an indispensable point guard for the Bulls. She orchestrates the offense with precision.',
  },
  {
    name: 'Alex Gomez',
    team: 'Lakers',
    position: 'Shooting Guard',
    points: 22,
    avatar: '',
    description:
      'Alex is a sharpshooter, known for his ability to hit three-pointers under pressure. His scoring ability is a huge asset to the Lakers.',
  },
  {
    name: 'Lisa Ray',
    team: 'Celtics',
    position: 'Small Forward',
    points: 20,
    avatar: '',
    description:
      'Lisa is a versatile small forward who excels on both ends of the floor. Her energy and competitiveness make her a fan favorite for the Celtics.',
  },
]);
</script>

<template>
  <!--   <h1>Arasaka Asset Manager</h1>
  <div>Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen. Denn esse est percipi - Sein ist wahrgenommen werden. Und weil Sie nun schon die Güte haben, mich ein paar weitere Sätze lang zu begleiten, möchte ich diese Gelegenheit nutzen, Ihnen nicht nur als Lückenfüller zu dienen, sondern auf etwas hinzuweisen, das es ebenso verdient wahrgenommen zu werden: Webstandards nämlich. Sehen Sie, Webstandards sind das Regelwerk, auf dem Webseiten aufbauen. So gibt es Regeln für HTML, CSS, JavaScript oder auch XML; Worte, die Sie vielleicht schon einmal von Ihrem Entwickler gehört haben. Diese Standards sorgen dafür, dass alle Beteiligten aus einer Webseite</div> -->
  <div class="w-full h-full flex justify-center items-center mt-8">
    <div class="w-2/3">
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
  </div>
</template>

<style scoped></style>
