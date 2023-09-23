import Phaser from 'phaser';
import { heartPointsService } from '../heart-service';

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

        create() {
                this.background = this.add.image(0, 0, 'scene2-bg-correct');
                this.background.setOrigin(0, 0);

                this.xButtonSFX = this.sound.add('x-button');

                this.levelPassed = this.sound.add('level-passed');
                this.levelPassed.play();

                for(let i = 0; i < heartPointsService.getHeartPoints(); i++){
                        this.heart_icon = this.add.image(770, 30 + i * 30, 'heart-icon');
                }

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
                        this.scene.start('play-scene3', { config: this.game.config });
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
