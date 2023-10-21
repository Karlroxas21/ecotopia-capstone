import Phaser from 'phaser';
import { heartPointsService } from '../heart-service';
import { scoreService } from '../score-service';

export class PlayScene2Correct extends Phaser.Scene {
        constructor() {
                super({ key: 'play-scene2-correct' });
        }

        config: Phaser.Types.Core.GameConfig | any;
        init(data: { config: Phaser.Types.Core.GameConfig }) {
                this.config = data.config;
        }

        background: any;

        heart_icon: any;
        
        bgMusic: any;
        levelPassed: any;
        xButtonSFX: any;

        textDisplay = "Correct! \nOil drums and plastic bags can contaminate the water \nand harm aquatic life";

        choice1 = "Oil drums and plastic bags";
        choice2 = "Leaves and branches";
        currentHeartPoints = heartPointsService.getHeartPoints();

        scoreDisplay: any;

        create() {
                this.background = this.add.image(0, 0, 'scene2-bg-correct');
                this.background.setOrigin(0, 0);

                this.xButtonSFX = this.sound.add('x-button');

                this.levelPassed = this.sound.add('level-passed');
                this.levelPassed.play();

                // for(let i = 1; i <= heartPointsService.getHeartPoints(); i++){
                //         this.heart_icon = this.add.sprite(770, 10 + i * 50, 'heart-icon');
                //         this.heart_icon.setScale(0.08);
                  
                //         this.anims.create({
                //           key: 'heart-icon_key',
                //           frames: this.anims.generateFrameNumbers('heart-icon', {start: 0, end: 4}),
                //           frameRate: 10,
                //           repeat: -1
                //       })
                  
                //       this.heart_icon.anims.play('heart-icon_key');
                // }

                this.scoreDisplay = this.add.text(10, 10, `Score: ${scoreService.getScorePoints()}`, { font: '20px monospace', color: '#ffffff' });


                // Text
                const centerX = this.config.width / 2;
                const centerY = this.config.height / 2;

                const graphics = this.add.graphics();
                graphics.fillStyle(0x000000, 0.5); // Color and Alpha
                graphics.fillRect(
                        75,
                        centerY - this.cameras.main.height / 6 / 2,
                        this.config.width - 150,
                        this.config.height / 6
                );

                const closeButton = this.add.text(
                        this.config.width - 90,
                        centerY - this.config.height / 6 / 2 + 15,
                        "X",
                        { font: '18px Arial', color: '#ffffff' }
                );
                closeButton.setOrigin(0.5);
                closeButton.setInteractive();
                closeButton.on('pointerdown', () => {
                        this.scene.start('pre-play-scene3', { config: this.game.config });
                        this.xButtonSFX.play();
                })

                const guide = this.add.text(
                        centerX,
                        centerY,
                        this.textDisplay,
                        { font: '18px monospace', color: '#ffffff', align: 'center' }
                );
                guide.setOrigin(0.5);
                // End of text

        }

        override update() {

        }
}
