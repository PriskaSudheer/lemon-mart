import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileuserComponent } from './profileuser.component';
import { UserMaterialModule } from '../user.material.module';
import { commonTestingModules, commonTestingProviders } from '../../common/common.testing'

describe('ProfileuserComponent', () => {
  let component: ProfileuserComponent
  let fixture: ComponentFixture<ProfileuserComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: commonTestingProviders,
      imports: commonTestingModules.concat([UserMaterialModule]),
      declarations: [ProfileuserComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileuserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
